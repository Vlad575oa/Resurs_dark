import type { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
    title: 'ResursCMS — Панель управления',
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin-root">
            {children}
        </div>
    );
}
