# cours

Landing page listing all teaching projects, with descriptions, screenshots, and links.

Built with [Eleventy](https://www.11ty.dev/) and automatically deployed to https://cours.nwolff.info/ on every push to main.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:8080.

## Add or edit a project

All project data lives in [`_data/projects.json`](_data/projects.json). Each entry looks like this:

```json
{
  "name": "Nom du projet",
  "description": "Une phrase de description.",
  "screenshot": "mon-projet.png",
  "repo": "https://github.com/nwolff/cours-xxx",
  "site": "https://nwolff.github.io/cours-xxx"
}
```

- **screenshot** — place the image file in the `screenshots/` folder and set this field to its filename. Set to `null` if you don't have one yet.
- **site** — set to `null` if the project has no public deployment.

Projects appear in the order they are listed in the file.
