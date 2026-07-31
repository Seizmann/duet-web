import { sealPayload, openPayload, computeSignature } from './crypto';
import { randomUUID } from 'crypto';

export type GatewayError = {
  message: string;
};

export type GatewayResponse<T> = {
  ok: boolean;
  data: T | GatewayError;
  trace_id: string;
  cookiesToSet?: string[];
};

export async function callGateway<T>(
  op: string,
  data: unknown,
  cookies?: string
): Promise<GatewayResponse<T>> {
  const payloadKey = process.env.GATEWAY_PAYLOAD_KEY;
  const signingKey = process.env.GATEWAY_SIGNING_KEY;
  const proxyUrl = process.env.DUET_PROXY_URL || 'https://duet-dev.rexio.pro';

  if (!payloadKey || !signingKey) {
    throw new Error('Missing gateway crypto keys in environment');
  }

  const traceId = randomUUID();
  const envelope = JSON.stringify({
    op,
    data,
    trace_id: traceId,
  });

  const sealedBody = sealPayload(envelope, payloadKey);
  const signature = computeSignature(sealedBody, signingKey);

  const headers: HeadersInit = {
    'Content-Type': 'text/plain',
    'x-duet-signature': signature,
    'x-duet-trace-id': traceId,
  };

  if (cookies) {
    headers['Cookie'] = cookies;
    
    // Extract CSRF token from cookies if present
    const match = cookies.match(/csrf_token=([^;]+)/);
    if (match && match[1]) {
      headers['x-csrf-token'] = match[1];
    }
  }

  const res = await fetch(`${proxyUrl}/api/gateway`, {
    method: 'POST',
    headers,
    body: sealedBody,
    // ensure we don't cache POSTs
    cache: 'no-store',
  });

  const rawBody = await res.text();

  // The backend answers handler failures with the real status AND an encrypted
  // {ok:false, message} body. Bailing on !res.ok would swallow that message and
  // surface a bare status code instead. Only a body we cannot open is fatal —
  // that means the proxy rejected us before the backend ever saw the envelope.
  let reply;
  try {
    reply = JSON.parse(openPayload(rawBody, payloadKey));
  } catch {
    throw new Error(
      res.status === 401 ? 'Unauthorized' : `Gateway returned status ${res.status}`
    );
  }

  const setCookieHeaders = res.headers.getSetCookie ? res.headers.getSetCookie() : [];

  return {
    ...reply,
    cookiesToSet: setCookieHeaders,
  };
}
