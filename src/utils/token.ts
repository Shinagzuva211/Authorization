import jwt from 'jsonwebtoken';

export type AuthUser = { id: string; role: 'user' | 'admin' };

const TOKEN_EXPIRES_IN = '7d';

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }
  return secret;
}

export function signToken(user: AuthUser): string {
  return jwt.sign({ role: user.role }, getJwtSecret(), {
    subject: user.id,
    expiresIn: TOKEN_EXPIRES_IN,
  });
}

export function verifyToken(token: string): AuthUser {
  const payload = jwt.verify(token, getJwtSecret());
  if (typeof payload === 'string' || !payload.sub) {
    throw new Error('Invalid token payload');
  }
  const role = payload.role === 'admin' ? 'admin' : 'user';
  return { id: String(payload.sub), role };
}
