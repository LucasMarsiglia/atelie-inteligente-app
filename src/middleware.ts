import { NextRequest, NextResponse } from 'next/server';
import { createClient } from './core/utils/lib/server';
import { cookies } from 'next/headers';

const authRoutes = ['/auth/sign-in', '/auth/sign-up', '/auth/confirm-registration'];
const publicRoutes = ['/docs/terms-of-use', '/docs/privacy-policy'];
const privateRedirect = '/painel';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const searchParams = req.nextUrl.searchParams;

  const error = searchParams.get('error');
  const errorCode = searchParams.get('error_code');
  const errorDescription = searchParams.get('error_description');

  if (error || errorCode) {
    const cleanUrl = new URL(req.nextUrl.pathname, req.url);

    const redirectUrl = new URL('/auth/sign-in', req.url);
    if (error) redirectUrl.searchParams.set('error', error);
    if (errorCode) redirectUrl.searchParams.set('error_code', errorCode);
    if (errorDescription)
      redirectUrl.searchParams.set('error_description', errorDescription);

    return NextResponse.redirect(redirectUrl);
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAuthRoute = authRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL(privateRedirect, req.url));
  }

  if (!user && !isAuthRoute) {
    const cookieStore = await cookies();
    const allCookies = cookieStore.getAll();

    for (const cookie of allCookies) {
      if (cookie.name.startsWith('sb-')) {
        cookieStore.delete(cookie.name);
      }
    }

    const response = NextResponse.redirect(new URL('/auth/sign-in', req.url));
    response.headers.delete('Set-Cookie');

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
