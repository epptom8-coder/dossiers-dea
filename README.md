# Dossiers DEA

Site statique pour créer, partager et consulter des dossiers d'enquête en mode lecture seule pour les dossiers complétés.

## Fonctionnement

- Tout est stocké localement dans le navigateur via `localStorage`.
- Les liens partagés sont construits avec un payload encodé dans le fragment `#...` de l'URL.
- Les dossiers sont créés et modifiés uniquement avec un nom + mot de passe local.
- Le mot de passe n'est jamais stocké en clair : il est haché avec SHA-256.
- Le site est compatible GitHub Pages.

## Structure

- `index.html` — vue principale
- `style.css` — thème officiel bleu marine / doré
- `app.js` — logique applicative

## Publication sur GitHub Pages

1. Uploadez ces fichiers dans le dépôt GitHub public.
2. Ouvrez le dépôt → Settings → Pages.
3. Sélectionnez la branche `main` et le dossier `/ (root)`.
4. Sauvegardez.
5. GitHub affichera une URL publique du type :
   `https://<votre-utilisateur>.github.io/dossiers-dea/`

## Modifier le code modérateur

Dans `app.js`, la constante suivante contrôle le code de modération :

```js
const CONFIG = {
  moderatorCode: 'DEA-2026',
  siteTitle: 'DOSSIERS DEA',
  appKey: 'dossiers-dea-v1'
};
```

Changez simplement `DEA-2026` par le code souhaité.

## Limites honnêtes

- Ce site est statique : il n’y a pas de vraie base de données et aucun serveur pour gérer des suppressions globales ou des liens “dépubliés” à distance.
- Un dossier partagé reste lisible tant que le lien est connu ; c’est la limite d’une solution sans backend.
- La suppression est locale sur l’appareil qui a sauvegardé le dossier, et les liens partagés ne peuvent pas être supprimés côté serveur.

## Utilisation rapide

1. Ouvrez le site.
2. Choisissez un nom et un mot de passe.
3. Cliquez sur “Entrer”.
4. Créez un dossier depuis l’écran d’accueil.
5. Sauvegardez, puis copiez le lien généré.
6. Envoyez-le à vos joueurs.

Dans une version complète avec base de données, il serait possible de gérer les dossiers de façon centralisée et de supprimer les liens distribués.

---

Site créé pour un usage fictif / rôle-play uniquement.
