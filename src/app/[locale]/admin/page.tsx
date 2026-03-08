import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default async function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token');

    if (!token?.value) {
        redirect(`/${locale}/admin/login`);
    }

    return (
        <AdminShell>
            <AdminDashboard />
        </AdminShell>
    );
}
