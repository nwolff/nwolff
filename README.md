# cours

Landing page listing all teaching projects, with descriptions, screenshots, and links.

Built with [Eleventy](https://www.11ty.dev/) and automatically deployed to https://cours.nwolff.info/ on every push to main.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:8080.

## How it works

Project data is fetched live from the GitHub API at build time (`_data/projects.js`). Any repo that meets all three conditions appears on the page automatically:

1. The repo name starts with `cours-`
2. A homepage URL is set on the repo
3. The repo does not have the `unlisted` topic

The description and homepage URL come from the GitHub repo metadata. No manual data file to maintain.

## Display names

By default the repo name is shown with `cours-` stripped (e.g. `cours-web` → `web`). To override with a prettier name, add an entry to [`_data/display-names.json`](_data/display-names.json):

```json
{
  "cours-web": "Le Web"
}
```

## Screenshots

Each project repo stores its own `screenshot.png` at the root. Commit one to a project repo and it will appear on the landing page automatically — no rebuild needed, it's hotlinked directly.

## Setting GitHub repo metadata

Each repo needs a **description** and **homepage URL** set in GitHub (Settings → General). These are the values shown on the landing page.

## Hiding a repo

Add the `unlisted` topic to a GitHub repo to exclude it from the page without deleting it.
