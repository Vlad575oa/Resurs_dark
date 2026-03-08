import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

export async function GET() {
    if (!fs.existsSync(UPLOADS_DIR)) {
        fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }

    const files = fs.readdirSync(UPLOADS_DIR);
    const media = files.map((filename) => {
        const stat = fs.statSync(path.join(UPLOADS_DIR, filename));
        return {
            id: filename,
            name: filename,
            url: `/uploads/${filename}`,
            size: stat.size,
            createdAt: stat.birthtime.toISOString(),
        };
    });

    return NextResponse.json({ media });
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: 'id param required' }, { status: 400 });
    }

    const filePath = path.join(UPLOADS_DIR, id);
    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    fs.unlinkSync(filePath);
    return NextResponse.json({ success: true });
}
