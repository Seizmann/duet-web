'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export type AuthState = {
  error?: string;
  success?: boolean;
};

export async function loginAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Please enter both email and password' };
  }

  // TODO: wire to real login endpoint (a2 op) once backend is ready
  
  const cookieStore = await cookies();
  cookieStore.set('duet_session', 'dummy-token-login', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  
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

  // TODO: wire to real signup endpoint (a1 op)
  // TODO: email verification
  
  const cookieStore = await cookies();
  cookieStore.set('duet_session', 'dummy-token-signup', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  
  redirect('/');
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('duet_session');
  redirect('/');
}
