import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  if (url.pathname === '/') {
    url.pathname = '/portfolio';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
