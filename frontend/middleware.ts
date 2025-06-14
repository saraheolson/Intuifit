import { authMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req: NextRequest) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    // Handle role-based access
    const role = auth.sessionClaims?.role as string;
    const path = req.nextUrl.pathname;

    // Coach routes
    if (path.startsWith('/dashboard') || path.startsWith('/clients') || 
        path.startsWith('/workouts') || path.startsWith('/exercises') || 
        path.startsWith('/billing')) {
      if (role !== 'coach' && role !== 'team_coach' && role !== 'admin') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }

    // Client routes
    if (path.startsWith('/home') || path.startsWith('/progress')) {
      if (role !== 'client') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}; 