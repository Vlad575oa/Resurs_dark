const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ?
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/app/[locale]', function (filePath) {
  if (filePath.endsWith('page.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Fix export default function Page() -> export default async function Page({ params }: { params: Promise<{ locale: string }> })
    if (content.match(/export default (async )?function (\w+Page)\(\) \{/)) {
      content = content.replace(/export default (async )?function (\w+Page)\(\) \{/g, 'export default async function $2({ params }: { params: Promise<{ locale: string }> }) {\n    const { locale } = await params;');
      changed = true;
    }

    // Fix export default async function Page({ params }: { params: { slug: string } })
    if (content.match(/export default async function (\w+Page)\(\{ params \}: \{ params: \{ slug: string \} \}\) \{/)) {
      content = content.replace(/export default async function (\w+Page)\(\{ params \}: \{ params: \{ slug: string \} \}\) \{/g, 'export default async function $1({ params }: { params: Promise<{ locale: string, slug: string }> }) {\n    const { locale, slug } = await params;');
      changed = true;
    }

    // Replace <Footer /> with <Footer locale={locale} />
    if (content.match(/<Footer \/>/)) {
      content = content.replace(/<Footer \/>/g, '<Footer locale={locale} />');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed', filePath);
    }
  }
});
