import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const locales = ["ru", "en", "hi"];
export const defaultLocale = "ru";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Admin panel redirect to involve locale
    if (pathname === '/admin') {
        return NextResponse.redirect(new URL(`/${defaultLocale}/admin`, request.url));
    }
    if (pathname.startsWith('/admin/')) {
        return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
    }

    // Skip API routes — no locale prefix needed
    if (pathname.startsWith('/api/admin')) {
        return NextResponse.next();
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next) and public/static files
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    ],
};
