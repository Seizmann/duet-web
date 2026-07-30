'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { callGateway, GatewayError } from '@/lib/gateway';

export type AuthState = {
  error?: string;
  success?: boolean;
};

// Helper to pass through cookies from gateway response
async function passCookies(setCookies: string[] | undefined) {
  if (!setCookies) return;
  const cookieStore = await cookies();
  for (const c of setCookies) {
    const parts = c.split(';');
    const firstPart = parts[0];
    const [name, ...valParts] = firstPart.split('=');
    const value = valParts.join('=');
    
    // We parse basic attributes (Next.js cookies.set needs object)
    let httpOnly = false;
    let secure = false;
    let sameSite: 'lax' | 'strict' | 'none' = 'lax';
    let path = '/';

    for (const part of parts.slice(1)) {
      const trimmed = part.trim().toLowerCase();
      if (trimmed === 'httponly') httpOnly = true;
      if (trimmed === 'secure') secure = true;
      if (trimmed.startsWith('samesite=')) {
        sameSite = trimmed.split('=')[1] as 'lax' | 'strict' | 'none';
      }
      if (trimmed.startsWith('path=')) {
        path = part.split('=')[1].trim();
      }
    }

    cookieStore.set({
      name: name.trim(),
      value,
      httpOnly,
      secure,
      sameSite,
      path,
    });
  }
}

export async function loginAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Please enter both email and password' };
  }

  try {
    const res = await callGateway('a2', { email, password });
    if (!res.ok) {
      return { error: (res.data as GatewayError).message || 'Login failed' };
    }
    await passCookies(res.cookiesToSet);
  } catch (err: unknown) {
    const error = err as Error;
    return { error: error.message || 'System error during login' };
  }
  
  redirect('/');
}

export async function signupAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!name || !email || !password) {
    return { error: 'Please fill in all fields' };
  }
  
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' };
  }

  try {
    const res = await callGateway('a1', { email, password, username: name });
    if (!res.ok) {
      return { error: (res.data as GatewayError).message || 'Signup failed' };
    }
    await passCookies(res.cookiesToSet);
  } catch (err: unknown) {
    const error = err as Error;
    return { error: error.message || 'System error during signup' };
  }
  
  redirect('/');
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('duet_session');
  cookieStore.delete('csrf_token');
  redirect('/');
}

