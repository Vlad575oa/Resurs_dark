import type { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
    title: 'ResursCMS — Панель управления',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin-root">
            {/* These should ideally be in the head via next/head or root layout, but keeping them here for simplicity if nested layout supports it or just as fragments */}
            {children}
        </div>
    );
}
