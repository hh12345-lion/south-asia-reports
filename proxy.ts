import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SEO_SLUG_REDIRECTS } from "@/lib/seo/slug-redirects";

const PRIMARY_ORIGIN = "https://www.southasiareports.com";

const REDIRECT_HOSTS = new Set([
  "southasiaexpert.com",
  "www.southasiaexpert.com",
]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (REDIRECT_HOSTS.has(host)) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, PRIMARY_ORIGIN);
    return NextResponse.redirect(url, 301);
  }

  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const redirectPath = SEO_SLUG_REDIRECTS[pathname];
  if (redirectPath) {
    const url = new URL(redirectPath + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
