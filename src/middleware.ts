import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from './core/utils/lib/server';

const authRoutes = ['/auth/sign-in', '/auth/sign-up'];
const publicRoutes = ['/'];
const privateRedirect = '/painel';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const path = req.nextUrl.pathname;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAuthRoute = authRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL(privateRedirect, req.url));
  }

  if (!user && !isAuthRoute && !isPublicRoute) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
