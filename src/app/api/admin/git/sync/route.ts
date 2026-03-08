import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export async function POST(req: NextRequest) {
    try {
        // Initial setup for git if not configured
        // In a real environment, we'd assume the user has git set up.
        // We'll perform a simple add, commit, and push.

        await execPromise('git add .');
        const { stdout: status } = await execPromise('git status --porcelain');

        if (!status) {
            return NextResponse.json({ success: true, message: 'Nothing to sync, already up to date.' });
        }

        await execPromise('git commit -m "Admin: Content Update Sync"');
        await execPromise('git push origin HEAD');

        return NextResponse.json({ success: true, message: 'Successfully synced with GitHub!' });
    } catch (error: any) {
        console.error('Git sync error:', error);
        return NextResponse.json({
            error: 'Failed to sync with GitHub',
            details: error.message
        }, { status: 500 });
    }
}
