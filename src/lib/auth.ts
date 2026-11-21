import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'immapa-telkom-university-secure-jwt-secret-key-2026';
const ADMIN_COOKIE_NAME = 'immapa_admin_token';

export interface AdminSession {
  email: string;
  role: 'SUPER_ADMIN' | 'ADMIN';
  name: string;
}

export async function createAdminToken(payload: AdminSession): Promise<string> {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export async function verifyAdminToken(token: string): Promise<AdminSession | null> {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminSession;
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<AdminSession | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) return null;
    return await verifyAdminToken(token);
  } catch {
    return null;
  }
}
