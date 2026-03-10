import { getServerTranslations } from "@/lib/server-intl";
import UnderConstruction from "@/components/ui/UnderConstruction";

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);

    return <UnderConstruction dict={messages} />;
}
