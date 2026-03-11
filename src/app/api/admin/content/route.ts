import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'data', 'content');

export async function GET(req: NextRequest) {
    const section = req.nextUrl.searchParams.get('section');
    const locale = req.nextUrl.searchParams.get('locale') || 'ru';

    if (!section) {
        return NextResponse.json({ error: 'section param required' }, { status: 400 });
    }

    const filePath = path.join(CONTENT_DIR, locale, `${section}.json`);
    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: 'Section or Locale not found' }, { status: 404 });
    }

    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return NextResponse.json({ section, locale, data: content });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { section, data, locale = 'ru' } = body;

    if (!section || !data) {
        return NextResponse.json({ error: 'section and data required' }, { status: 400 });
    }

    const dirPath = path.join(CONTENT_DIR, locale);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, `${section}.json`);
    
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error: any) {
        console.error('File write error:', error);
        if (error.code === 'EROFS' || error.message.includes('read-only')) {
            return NextResponse.json({ 
                error: 'Файловая система доступна только для чтения (Vercel). Пожалуйста, используйте localhost для редактирования контента.',
                code: 'READ_ONLY_FILESYSTEM'
            }, { status: 403 });
        }
        return NextResponse.json({ error: 'Не удалось сохранить файл на диск' }, { status: 500 });
    }

    return NextResponse.json({ success: true, section, locale });
}
