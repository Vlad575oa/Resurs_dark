import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const drafts = body.drafts as { section: string; locale: string; data: any }[];

        if (!drafts || drafts.length === 0) {
            return NextResponse.json({ error: 'No drafts provided' }, { status: 400 });
        }

        const token = process.env.GITHUB_TOKEN;
        const repo = process.env.GITHUB_REPO; // e.g., "Vlad575oa/Resurs_dark"

        if (!token || !repo) {
            return NextResponse.json({ error: 'GitHub credentials (GITHUB_TOKEN, GITHUB_REPO) not configured on the server.' }, { status: 500 });
        }

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'Content-Type': 'application/json'
        };

        const baseUrl = `https://api.github.com/repos/${repo}`;

        // 1. Get current commit SHA
        const refRes = await fetch(`${baseUrl}/git/refs/heads/main`, { headers });
        if (!refRes.ok) throw new Error(`Failed to fetch repository ref. Ensure GITHUB_REPO is correct (e.g., Vlad575oa/Resurs_dark) and token is valid.`);
        const refData = await refRes.json();
        const commitSha = refData.object.sha;

        // 2. Get commit details for tree SHA
        const commitRes = await fetch(`${baseUrl}/git/commits/${commitSha}`, { headers });
        if (!commitRes.ok) throw new Error('Failed to fetch commit details from GitHub.');
        const commitData = await commitRes.json();
        const baseTreeSha = commitData.tree.sha;

        // 3. Create tree object mapping updated files
        // By passing `content` directly in the tree node, GitHub creates the blobs for us.
        const treeItems = drafts.map(draft => {
            const path = `src/data/content/${draft.locale}/${draft.section}.json`;
            const content = JSON.stringify(draft.data, null, 2) + '\n';
            return {
                path,
                mode: '100644',
                type: 'blob',
                content
            };
        });

        // 4. Create new tree
        const treeRes = await fetch(`${baseUrl}/git/trees`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                base_tree: baseTreeSha,
                tree: treeItems
            })
        });
        if (!treeRes.ok) {
            const err = await treeRes.json();
            throw new Error(`Failed to create tree: ${err.message || 'Unknown err'}`);
        }
        const newTreeData = await treeRes.json();
        const newTreeSha = newTreeData.sha;

        // 5. Create new commit
        const sectionsStr = drafts.map(d => `${d.locale}/${d.section}`).join(', ');
        const createCommitRes = await fetch(`${baseUrl}/git/commits`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                message: `content: update ${sectionsStr} via CMS editor`,
                tree: newTreeSha,
                parents: [commitSha]
            })
        });
        if (!createCommitRes.ok) throw new Error('Failed to create commit on GitHub.');
        const newCommitData = await createCommitRes.json();
        const newCommitSha = newCommitData.sha;

        // 6. Update reference (push)
        const updateRefRes = await fetch(`${baseUrl}/git/refs/heads/main`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({
                sha: newCommitSha,
                force: false
            })
        });
        if (!updateRefRes.ok) throw new Error('Failed to push branch reference to GitHub.');

        return NextResponse.json({ success: true, message: `Successfully synced ${drafts.length} files.` });
    } catch (error: any) {
        console.error('GitHub Sync Error:', error);
        return NextResponse.json({ error: error.message || 'Error occurred while syncing to GitHub' }, { status: 500 });
    }
}
