import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const displayNames = require('./display-names.json');

export default async function () {
  const headers = { 'User-Agent': 'cours-site' };
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    'https://api.github.com/users/nwolff/repos?per_page=100&sort=pushed',
    { headers }
  );
  if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
  const repos = await res.json();

  return repos
    .filter(r => r.name.startsWith('cours-'))
    .filter(r => r.homepage?.trim()) // exclure les projets sans site web public
    .filter(r => !r.topics.includes('unlisted'))
    .map(r => {
      return {
        name: displayNames[r.name] || r.name.replace(/^cours-/, ''),
        description: r.description || '',
        site: r.homepage,
        repo: r.html_url,
        screenshot: `https://raw.githubusercontent.com/nwolff/${r.name}/main/screenshot.png`,
        updated: r.pushed_at,
        topics: r.topics.filter(t => t !== 'unlisted'),
      };
    });
}
