'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to get CSRF token from cookie for form submissions
 */
export function useCsrfToken() {
    const [csrfToken, setCsrfToken] = useState<string>('');

    useEffect(() => {
        // Get CSRF token from cookie
        const getCookie = (name: string): string | null => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) {
                return parts.pop()?.split(';').shift() || null;
            }
            return null;
        };

        const token = getCookie('csrf-token');
        if (token) {
            setCsrfToken(token);
        }
    }, []);

    return csrfToken;
}

/**
 * Get CSRF headers for fetch requests
 */
export function getCsrfHeaders(csrfToken: string): HeadersInit {
    return {
        'x-csrf-token': csrfToken,
        'Content-Type': 'application/json',
    };
}
