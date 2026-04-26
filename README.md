# cours

Page d'accueil listant tous les projets pédagogiques, avec descriptions, captures d'écran et liens.

Construit avec [Eleventy](https://www.11ty.dev/) et déployé automatiquement sur https://cours.nwolff.info/ à chaque push sur main.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:8080.

## Fonctionnement

Les données des projets sont récupérées en direct depuis l'API GitHub au moment du build (`_data/projects.js`). Un dépôt apparaît sur la page s'il remplit les deux conditions suivantes :

1. Il possède un topic de la forme `index-rank-N` (ex. `index-rank-3`)
2. Une URL de site web est renseignée sur le dépôt

Le numéro de rang détermine l'ordre d'affichage — les valeurs les plus basses apparaissent en premier. Le tag `index-rank-N` est retiré de la liste des badges affichés sur la carte.

La description et l'URL du site proviennent des métadonnées du dépôt GitHub. Aucun fichier de données à maintenir manuellement.

## Noms d'affichage

Par défaut, le nom du dépôt est affiché sans le préfixe `cours-` (ex. `cours-web` → `web`). Pour utiliser un nom plus lisible, ajouter une entrée dans [`_data/display-names.json`](_data/display-names.json) :

```json
{
  "cours-web": "Le Web"
}
```

## Captures d'écran

Chaque dépôt de projet stocke son propre fichier `screenshot.png` à la racine. Il suffit d'en ajouter un dans un dépôt pour qu'il apparaisse automatiquement sur la page — aucun rebuild nécessaire, l'image est liée directement.

## Métadonnées GitHub

Chaque dépôt doit avoir une **description** et une **URL de site web** renseignées sur GitHub (Paramètres → Général). Ce sont ces valeurs qui s'affichent sur la page.

## Ajouter un dépôt à l'index

Ajouter le topic `index-rank-N` (remplacer `N` par un entier positif) sur un dépôt GitHub et renseigner son URL de site web. La page est reconstruite à chaque push sur main.
