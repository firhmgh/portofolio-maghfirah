const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function preRenderAllStaticPages() {
  console.log('--- STARTING MULTI-ROUTE PRE-RENDERING GENERATOR (PORTABLE) ---');
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

  // Read clean built index.html template from build/index.html
  // Strip any existing content inside #root to maintain a pristine injection template
  const rawBaseHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
  const baseHtmlTemplate = rawBaseHtml.replace(/<div id="root">[\s\S]*?<\/div>/, '<div id="root"></div>');

  for (const item of routesToPreRender) {
    const targetUrl = `${BASE_URL}${item.route === '/' ? '/' : item.route}`;
    console.log(`Rendering route: ${item.route} from ${targetUrl}...`);
    
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 45000 });
    
    // Extract rendered #root HTML and Page Title
    const renderedRootHtml = await page.$eval('#root', el => el.innerHTML);
    const renderedTitle = await page.title();

    // Inject into clean template
    let pageHtml = baseHtmlTemplate.replace(/<title>[^<]+<\/title>/, `<title>${renderedTitle}</title>`);
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${renderedRootHtml}</div>`);

    // Ensure target output directory exists
    if (!fs.existsSync(item.outputDir)) {
      fs.mkdirSync(item.outputDir, { recursive: true });
    }

    const outputFile = path.join(item.outputDir, 'index.html');
    fs.writeFileSync(outputFile, pageHtml, 'utf8');
    console.log(`  -> Written: ${path.relative(projectRoot, outputFile)} (Size: ${pageHtml.length} bytes)`);
  }

  await browser.close();
  console.log('--- ALL 19 ROUTES PRE-RENDERED SUCCESSFULLY ---');
}

preRenderAllStaticPages().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
