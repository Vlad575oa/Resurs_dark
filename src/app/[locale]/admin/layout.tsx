import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { generateCsrfToken } from '@/lib/csrf';
import '../../globals.css';

export const metadata: Metadata = {
    title: 'ResursCMS — Панель управления',
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();

    // Set CSRF token if not already present
    if (!cookieStore.has('csrf-token')) {
        const csrfToken = generateCsrfToken();
        cookieStore.set('csrf-token', csrfToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/admin',
            maxAge: 60 * 60 * 24, // 24 hours
        });
    }

    return (
        <div className="admin-root">
            {children}
        </div>
    );
}
