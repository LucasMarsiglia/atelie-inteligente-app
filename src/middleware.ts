import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from './core/utils/lib/server';

const publicRoutes = ['/', '/auth/sign-in', '/auth/sign-up'];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (isPublicRoute) {
    return res;
  }

  if (!user) {
    const redirectUrl = new URL('/auth/sign-in', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
