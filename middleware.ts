import { auth } from './auth';

export const middleware = auth; // ✅ Así Next lo reconoce como middleware

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
