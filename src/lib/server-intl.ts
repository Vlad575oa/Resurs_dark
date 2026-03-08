import fs from 'fs';
import path from 'path';
import ru from "@/app/messages/ru.json";
import en from "@/app/messages/en.json";

const CONTENT_DIR = path.join(process.cwd(), 'src/data/content');

export async function getServerTranslations(locale: string = "ru") {
    let baseMessages: any = locale === "en" ? { ...en } : { ...ru };

    // Hindi fallback to EN
    if (locale === "hi") {
        baseMessages = { ...en };
    }

    let messages = { ...baseMessages };

    // Merge editable content from src/data/content/[locale]/*.json
    const localeDir = path.join(CONTENT_DIR, locale);
    if (fs.existsSync(localeDir)) {
        try {
            const files = fs.readdirSync(localeDir).filter(f => f.endsWith('.json'));
            for (const file of files) {
                const section = file.replace('.json', '');
                const filePath = path.join(localeDir, file);
                const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

                if (section === 'home') {
                    // Flatten home.json directly into messages to override top-level keys like Hero, TrustedBy
                    messages = { ...messages, ...content };
                } else {
                    // Capitalize first letter (e.g. services -> Services) for other sections
                    const key = section.charAt(0).toUpperCase() + section.slice(1);
                    messages[key] = { ...(messages[key] || {}), ...content };
                }
            }
        } catch (e) {
            console.error('Error merging editable content:', e);
        }
    }

    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = messages;
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }
        return typeof value === 'string' ? value : key;
    };

    return { t, messages };
}
