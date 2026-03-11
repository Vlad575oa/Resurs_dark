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

    if (process.env.NODE_ENV === 'development') {
        const dirPath = path.join(CONTENT_DIR, locale);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    
        const filePath = path.join(dirPath, `${section}.json`);
        
        try {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
            return NextResponse.json({ success: true, section, locale });
        } catch (error: any) {
            console.error('File write error:', error);
            return NextResponse.json({ error: 'Не удалось сохранить файл на локальный диск' }, { status: 500 });
        }
    } else {
        // Production (Vercel/Netlify): Use GitHub API
        const token = process.env.GITHUB_TOKEN;
        const repo = process.env.GITHUB_REPO;
        
        if (!token || !repo) {
            return NextResponse.json({ 
                error: 'GitHub интеграция не настроена: отсутствуют GITHUB_TOKEN или GITHUB_REPO в переменных окружения' 
            }, { status: 500 });
        }

        const githubFilePath = `src/data/content/${locale}/${section}.json`;
        const apiUrl = `https://api.github.com/repos/${repo}/contents/${githubFilePath}`;
        
        try {
            // First get the file SHA if it exists to update it
            let sha = '';
            const getRes = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/vnd.github.v3+json',
                }
            });
            
            if (getRes.ok) {
                const getResJson = await getRes.json();
                sha = getResJson.sha;
            }

            // Now commit the file
            const contentBase64 = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');
            const putRes = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: `content: update ${section} (${locale}) via admin panel`,
                    content: contentBase64,
                    sha: sha || undefined,
                    branch: 'main'
                })
            });

            if (!putRes.ok) {
                const err = await putRes.text();
                throw new Error(`GitHub API Error (${putRes.status}): ${err}`);
            }
            
            return NextResponse.json({ success: true, section, locale, target: 'github' });
            
        } catch (error: any) {
            console.error('GitHub save error:', error);
            return NextResponse.json({ 
                error: 'Ошибка сохранения в GitHub. Дальнейшая работа приложения не нарушена. ' + (error.message || 'Неизвестная ошибка') 
            }, { status: 500 });
        }
    }
}
