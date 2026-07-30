'use client';

import * as React from 'react';
import Link from 'next/link';
import { useActionState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { loginAction } from '@/app/actions/auth';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, {});

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-canvas">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-[28px] font-semibold tracking-tight text-ink">
            Sign in to Duet
          </h1>
          <p className="mt-2 text-ink-soft">
            Welcome back to your private space.
          </p>
        </div>

        <Card>
          <form action={formAction} className="flex flex-col gap-5">
            <Input
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            
            <Input
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />

            {state.error && (
              <div className="text-sm font-medium text-red-500">
                {state.error}
              </div>
            )}

            <Button type="submit" isLoading={isPending} className="mt-2 w-full">
              Sign in
            </Button>
          </form>
        </Card>

        <p className="mt-6 text-center text-sm text-ink-soft">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-accent hover:text-accent-strong transition-colors">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
