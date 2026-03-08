import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

export async function POST(req: NextRequest) {
    if (!fs.existsSync(UPLOADS_DIR)) {
        fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }

    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (!files.length) {
        return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }

    const uploaded: string[] = [];

    for (const file of files) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const ext = path.extname(file.name);
        const name = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
        const dest = path.join(UPLOADS_DIR, name);
        fs.writeFileSync(dest, buffer);
        uploaded.push(`/uploads/${name}`);
    }

    return NextResponse.json({ success: true, uploaded });
}
