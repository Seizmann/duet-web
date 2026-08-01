/**
 * Landing page guardrails.
 *
 * These are content and compliance invariants rather than rendering tests: the
 * things that quietly regress when someone edits copy or adds a component, and
 * that CI should catch before a deploy. Run with `npm run test:landing`.
 */
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = join(process.cwd(), 'src');

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.tsx?$/.test(entry) ? [full] : [];
  });
}

const files = sourceFiles(SRC).map((path) => ({ path, text: readFileSync(path, 'utf8') }));

// DESIGN.md §1 — system emojis are banned everywhere in the UI. The dingbat
// block is included because that is where the checkmarks and crosses live that
// tend to creep in as status glyphs.
const EMOJI = /[\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{1F300}-\u{1FAFF}\u{FE0F}]/u;
for (const { path, text } of files) {
  assert.ok(!EMOJI.test(text), `emoji or dingbat glyph found in ${path} — use a vector icon`);
}

// DESIGN.md §2 — the palette is centralised in globals.css. A raw hex inside a
// component means a token was bypassed and dark mode will drift. Files under
// src/app are exempt: browser metadata (theme-color, the manifest) is consumed
// outside the document and cannot reference a CSS variable.
for (const { path, text } of files) {
  if (path.startsWith(join(SRC, 'app'))) continue;
  assert.ok(!/#[0-9a-fA-F]{6}\b/.test(text), `hardcoded hex colour in ${path} — use a token`);
}

// Performance: client components are the JS budget. Only components that hold
// browser state need to opt in; anything else appearing here should be a
// deliberate change. Server Actions run from a plain `<form action={...}>`, so a
// component that only submits one stays on the server.
//
// Matched against the first non-comment, non-blank line rather than the start of
// the file: a leading licence comment, a BOM, or double quotes would slip past a
// plain `startsWith`, and a directive this check cannot see is a directive it
// cannot hold to the list below.
function hasClientDirective(text: string): boolean {
  const firstMeaningful = text
    .replace(/^﻿/, '')
    .split('\n')
    .find((line) => line.trim() !== '' && !/^\s*(\/\/|\/\*|\*)/.test(line));
  return /^\s*['"]use client['"]\s*;?\s*$/.test(firstMeaningful ?? '');
}

const clientComponents = files.filter(({ text }) => hasClientDirective(text)).map(({ path }) => path);
assert.deepEqual(
  clientComponents.map((p) => p.slice(SRC.length + 1)).sort(),
  [
    'app/(auth)/login/page.tsx', // useActionState for inline form errors
    'app/(auth)/signup/page.tsx', // useActionState for inline form errors
    'components/feed/FeedPost.tsx', // optimistic reaction state
    'components/landing/MediationLanes.tsx',
  ],
  'unexpected client component — keep interactivity at leaf nodes',
);

// `/app` never existed as a route, so every link to it was a 404. The landing
// page's sign-in call to action pointed there.
for (const { path, text } of files) {
  assert.ok(
    !/href=["']\/app(["'/])/.test(text),
    `link to /app in ${path} — that route does not exist`,
  );
}

// The "verify it yourself" links pointed at an organisation page rather than the
// ranking and messaging repositories, which are not published. A verification link
// that does not reach the code undercuts the claim it is making. Restore these
// with real repository URLs once the crates are public.
for (const { path, text } of files) {
  assert.ok(
    !/github\.com\/spritex(?!\/)/.test(text),
    `bare organisation link in ${path} — link to the repository or omit it`,
  );
}

// The published ranking weights are the substance of the transparency claim, so
// they must match the crate rather than drift as copy. Source of truth is
// `RankingWeights::default()` in duet-feed-algorithm.
//
// ponytail: duplicated rather than read, because duet-feed-algorithm is a separate
// repository and a cross-repo read would break this suite whenever duet-web is
// checked out alone. A real sync check needs the crate to publish its weights.
const transparency = readFileSync(join(SRC, 'components/landing/Transparency.tsx'), 'utf8');
for (const [label, weight] of [
  ['Stated interest', '0.40'],
  ['Recency', '0.30'],
  ['Connection signal', '0.15'],
  ['Post quality', '0.10'],
  ['Repeat-creator penalty', '-0.05'],
]) {
  assert.ok(
    new RegExp(`'${weight}'[^\\n]*'${label}'`).test(transparency),
    `published weight for "${label}" is not ${weight} — it must match RankingWeights::default()`,
  );
}

// GEO.md — the structured data must stay in step with the visible FAQ copy, so
// it has to be derived from it rather than hand-maintained alongside it.
const structuredData = readFileSync(join(SRC, 'components/seo/StructuredData.tsx'), 'utf8');
assert.ok(
  structuredData.includes('FAQ_ENTRIES'),
  'structured data must reuse the rendered FAQ entries, not duplicate them',
);

console.log(`landing checks passed across ${files.length} source files`);
