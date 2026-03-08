import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminShell from '@/components/admin/AdminShell';
import ContentEditor from '@/components/admin/ContentEditor';

export default async function ContentPage({ params }: { params: Promise<{ locale: string, section: string }> }) {
    const { locale, section } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token');
    if (!token?.value) redirect(`/${locale}/admin/login`);

    return (
        <AdminShell>
            <ContentEditor section={section} />
        </AdminShell>
    );
}
