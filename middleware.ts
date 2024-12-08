import { NextResponse } from 'next/server'
import { getSession } from "next-auth/react";
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

  const session = await getSession({ req: request });


  if (!session) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/user/accout/:path*', 
};
