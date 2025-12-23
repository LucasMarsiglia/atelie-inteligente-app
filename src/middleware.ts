import { NextRequest, NextResponse } from 'next/server';
import { createClient } from './core/utils/lib/server';
import { cookies } from 'next/headers';

const publicRoutes = [
  '/docs/terms-of-use',
  '/docs/privacy-policy',
  '/auth/sign-in',
  '/auth/sign-up',
  '/auth/confirm-registration',
];

const roleRoutes: Record<'ceramista' | 'comprador', string[]> = {
  ceramista: ['/painel'],
  comprador: ['/catalogo'],
};

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const searchParams = req.nextUrl.searchParams;

  const error = searchParams.get('error');
  const errorCode = searchParams.get('error_code');
  const errorDescription = searchParams.get('error_description');

  if (error || errorCode) {
    const redirectUrl = new URL('/auth/sign-in', req.url);
    if (error) redirectUrl.searchParams.set('error', error);
    if (errorCode) redirectUrl.searchParams.set('error_code', errorCode);
    if (errorDescription) {
      redirectUrl.searchParams.set('error_description', errorDescription);
    }
    return NextResponse.redirect(redirectUrl);
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (!user && !isPublicRoute) {
    const cookieStore = await cookies();

    for (const cookie of cookieStore.getAll()) {
      if (cookie.name.startsWith('sb-')) {
        cookieStore.delete(cookie.name);
      }
    }

    return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  }

  if (user) {
    const userType = user.user_metadata?.type as 'ceramista' | 'comprador' | undefined;

    if (!userType) {
      return NextResponse.redirect(new URL('/auth/sign-in', req.url));
    }

    const allowedRoutes = roleRoutes[userType];

    const isAllowedByRole = allowedRoutes.some((route) => path.startsWith(route));

    if (
      !isAllowedByRole &&
      Object.values(roleRoutes)
        .flat()
        .some((route) => path.startsWith(route))
    ) {
      return NextResponse.redirect(new URL(allowedRoutes[0], req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
