import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { generateCsrfToken } from "@/lib/csrf";

export const locales = ["ru", "en", "hi"];
export const defaultLocale = "ru";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. API routes — MUST be handled first to avoid overlapping with /admin checks
    if (pathname.startsWith('/api/admin')) {
        // CSRF protection for state-changing requests
        if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
            const csrfToken = request.cookies.get('csrf-token')?.value;
            const headerToken = request.headers.get('x-csrf-token');

            if (!csrfToken || !headerToken || csrfToken !== headerToken) {
                return NextResponse.json(
                    { error: 'Invalid CSRF token. Please refresh the page and try again.' },
                    { status: 403 }
                );
            }
        }
        return NextResponse.next();
    }

    // 2. Admin panel redirect to involve locale
    if (pathname === '/admin' || pathname === '/admin/') {
        const response = NextResponse.redirect(new URL(`/${defaultLocale}/admin`, request.url));
        if (!request.cookies.has('csrf-token')) {
            response.cookies.set('csrf-token', generateCsrfToken(), {
                httpOnly: false, // Changed to false so client JS can read it for header
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24,
            });
        }
        return response;
    }

    if (pathname.startsWith('/admin/')) {
        const response = NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
        if (!request.cookies.has('csrf-token')) {
            response.cookies.set('csrf-token', generateCsrfToken(), {
                httpOnly: false, // Changed to false so client JS can read it for header
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24,
            });
        }
        return response;
    }

    // 3. Set CSRF token for actual localized admin routes if missing
    if (pathname.includes('/admin') && !pathname.startsWith('/api') && !request.cookies.has('csrf-token')) {
        const response = NextResponse.next();
        response.cookies.set('csrf-token', generateCsrfToken(), {
            httpOnly: false, // Changed to false so client JS can read it for header
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24,
        });
        return response;
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // Redirect if there is no locale
    const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    const response = NextResponse.redirect(request.nextUrl);

    return response;
}

export const config = {
    matcher: [
        // Skip all internal paths (_next) and public/static files
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt|xml)).*)',
    ],
};
