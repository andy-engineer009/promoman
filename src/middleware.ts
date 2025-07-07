import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // PUBLIC ROUTES
  const publicRoutes = ["/login", "/signup/user", "/signup/creator", "/discover"];

  // REDIRECT logged-in users away from public auth pages
  if (token && publicRoutes.includes(pathname)) {
    // Redirect based on role 
    const isCreator = token.role === "creator";
    const redirectPath = isCreator ? "/creator/dashboard" : "/discover";
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  // PROTECT /creator/* pages — only accessible with valid toke333
  if (pathname.startsWith("/creator") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

 }
