import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createAdminToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const expectedEmail = process.env.DEFAULT_ADMIN_EMAIL || 'admin@immapa.telkomuniversity.ac.id';
    const expectedPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'AdminIMMAPA2026!';

    if (email === expectedEmail && password === expectedPassword) {
      const token = await createAdminToken({
        email,
        role: 'SUPER_ADMIN',
        name: 'Administrator IMMAPA',
      });

      const cookieStore = await cookies();
      cookieStore.set('immapa_admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Email atau kata sandi administrator salah.' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth API error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem otentikasi.' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('immapa_admin_token');
  return NextResponse.json({ success: true });
}
