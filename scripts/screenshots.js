const { chromium } = require('playwright');
const fs = require('fs');

const projects = JSON.parse(fs.readFileSync('_data/projects.json', 'utf8'));

(async () => {
  const browser = await chromium.launch();

  for (const project of projects) {
    if (!project.site) continue;

    const filename = project.repo.split('/').pop().replace('cours-', '') + '.png';
    const dest = `screenshots/${filename}`;

    console.log(`Capturing ${project.site} …`);
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(project.site, { waitUntil: 'networkidle', timeout: 15000 }).catch(() =>
      page.goto(project.site, { waitUntil: 'load' })
    );
    await page.screenshot({ path: dest });
    await page.close();

    project.screenshot = filename;
    console.log(`  → ${dest}`);
  }

  await browser.close();

  fs.writeFileSync('_data/projects.json', JSON.stringify(projects, null, 2) + '\n');
  console.log('\nUpdated _data/projects.json');
})();
