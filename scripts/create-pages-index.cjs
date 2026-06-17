const fs = require('fs');
const path = require('path');

const clientDir = path.join(process.cwd(), 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  throw new Error('Missing dist/client/assets. Run vite build first.');
}

const assets = fs.readdirSync(assetsDir);
const css = assets.find((file) => file.startsWith('styles-') && file.endsWith('.css'));
const js = assets.find((file) => file.startsWith('index-') && file.endsWith('.js'));

if (!css || !js) {
  throw new Error(`Could not find built CSS/JS assets. css=${css || 'missing'} js=${js || 'missing'}`);
}

const base = '/bina-lab-landing/';
const html = `<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Binaa Lab Landing</title>
    <meta name="description" content="صفحة هبوط مستقلة لمحاضرة Binaa Lab المجانية في التصميم الداخلي بالذكاء الاصطناعي." />
    <link rel="stylesheet" href="${base}assets/${css}" />
    <script type="module" src="${base}assets/${js}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

fs.writeFileSync(path.join(clientDir, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(clientDir, '.nojekyll'), '', 'utf8');
