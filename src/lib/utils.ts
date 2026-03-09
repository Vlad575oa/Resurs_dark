import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function slugify(text: string) {
    if (!text) return "";
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w-]+/g, '')     // Remove all non-word chars
        .replace(/--+/g, '-');    // Replace multiple - with single -
}

export function truncateContent(content: string, length: number = 120) {
    if (!content) return "";
    // Remove HTML tags
    const plainText = content.replace(/<[^>]*>/g, '');
    return plainText.length > length ? plainText.substring(0, length) + "..." : plainText;
}
