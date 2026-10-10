const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function preRenderAllStaticPages() {
  console.log('--- STARTING MULTI-ROUTE PRE-RENDERING GENERATOR (PORTABLE & ROBUST) ---');
  const projectRoot = path.resolve(__dirname, '..');
  const buildDir = path.join(projectRoot, 'build');
  const dataPath = path.join(projectRoot, 'src', 'data', 'projectsData.ts');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const BASE_URL = 'https://firhmgh.github.io/portofolio-maghfirah';

  // Read projectsData to get 16 slugs dynamically
  const dataContent = fs.readFileSync(dataPath, 'utf8');
  const projectRegex = /slug:\s*'([^']+)'/g;
  const slugs = [];
  let m;
  while ((m = projectRegex.exec(dataContent)) !== null) {
    if (!slugs.includes(m[1])) slugs.push(m[1]);
  }

  const routesToPreRender = [
    { route: '/', outputDir: buildDir },
    { route: '/products', outputDir: path.join(buildDir, 'products') },
    { route: '/services', outputDir: path.join(buildDir, 'services') },
    ...slugs.map(s => ({ route: `/projects/${s}`, outputDir: path.join(buildDir, 'projects', s) }))
  ];

  console.log(`Pre-rendering total ${routesToPreRender.length} routes...`);

  // Build clean shell template directly from build/index.html
  // By slicing strictly before <div id="root"> and after the closing </body>
  const rawBaseHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
  const rootIndex = rawBaseHtml.indexOf('<div id="root">');
  const bodyCloseIndex = rawBaseHtml.indexOf('</body>');

  if (rootIndex === -1 || bodyCloseIndex === -1) {
    throw new Error('Unable to find root or body tag in build/index.html');
  }

  const headPart = rawBaseHtml.substring(0, rootIndex);
  const tailPart = rawBaseHtml.substring(bodyCloseIndex); // contains </body></html>

  // Look for any scripts between root and body (like the bundle script tags)
  const scriptsMatch = rawBaseHtml.substring(rootIndex, bodyCloseIndex).match(/<script[\s\S]*?<\/script>/g);
  const scriptsHtml = scriptsMatch ? scriptsMatch.join('\n    ') : '';

  for (const item of routesToPreRender) {
    const targetUrl = `${BASE_URL}${item.route === '/' ? '/' : item.route}`;
    console.log(`Rendering route: ${item.route} from ${targetUrl}...`);
    
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 45000 });
    
    // Extract rendered #root HTML and Page Title
    const renderedRootHtml = await page.$eval('#root', el => el.innerHTML);
    const renderedTitle = await page.title();

    // Construct clean, un-nested pre-rendered page
    let finalHead = headPart.replace(/<title>[^<]+<\/title>/, `<title>${renderedTitle}</title>`);
    let pageHtml = `${finalHead}<div id="root">${renderedRootHtml}</div>\n    ${scriptsHtml}\n  ${tailPart}`;

    // Ensure target output directory exists
    if (!fs.existsSync(item.outputDir)) {
      fs.mkdirSync(item.outputDir, { recursive: true });
    }

    const outputFile = path.join(item.outputDir, 'index.html');
    fs.writeFileSync(outputFile, pageHtml, 'utf8');
    console.log(`  -> Written: ${path.relative(projectRoot, outputFile)} (Size: ${pageHtml.length} bytes)`);
  }

  await browser.close();
  console.log('--- ALL 19 ROUTES PRE-RENDERED CLEANLY & SUCCESSFULLY ---');
}

preRenderAllStaticPages().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
