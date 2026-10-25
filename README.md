# Eau-Énergie — Site web

[www.eau-energie.fr](https://www.eau-energie.fr/) · [Dépôt GitHub](https://github.com/Eau-Energie/eau-energie.github.io)

## Présentation

Ce dépôt contient les sources du site institutionnel **Eau-Énergie**, bureau d'études spécialisé dans l'hydraulique, l'hydroélectricité, les droits d'eau et la valorisation des ouvrages hydrauliques.

Le site présente les compétences du cabinet, ses domaines d'intervention, ses publications et ses coordonnées.

## Domaines d'intervention

- Études hydrauliques et hydroélectriques, notamment l'évaluation du productible.
- Droits d'eau, foncier hydraulique et procédures réglementaires.
- Ouvrages en rivière, environnement aquatique et ingénierie de projets.
- Due diligence et études techniques pour les installations hydroélectriques.

## Organisation des fichiers

Les pages du site sont principalement des fichiers HTML situés à la racine du dépôt :

| Fichier ou dossier | Rôle |
| --- | --- |
| `index.html` | Page d'accueil |
| `hydroelectricite.html`, `hydraulique.html` | Présentation des activités techniques |
| `productible-hydroelectrique.html`, `nivellement-hydro.html` | Prestations et analyses spécialisées |
| `foncier.html`, `reglementaire.html`, `environnement.html` | Cadres foncier, réglementaire et environnemental |
| `publications.html`, `publications2.html`, `papers/` | Publications et documentation |
| `actualite.html`, `news/` | Actualités |
| `contact.html`, `denis-bouzon.html` | Contact et présentation |
| `assets/` | Ressources statiques |
| `robots.txt`, `sitemap.xml`, `sitemap-news.xml` | Exploration et indexation |
| `CNAME` | Configuration du domaine personnalisé |

Des sous-dossiers de sauvegarde peuvent contenir des versions de travail. Ils ne constituent pas, à eux seuls, la version publiée du site.

## Publication

Le site public utilise le domaine **www.eau-energie.fr**. Le dépôt GitHub sert de référence pour les changements de code et le suivi des versions.

Pour une modification :

1. Modifier les fichiers concernés et conserver leurs liens relatifs.
2. Vérifier localement les pages HTML, leurs ressources et leur affichage sur mobile.
3. Contrôler les liens internes, les redirections et les erreurs HTTP 404.
4. Mettre à jour le sitemap et les métadonnées SEO lorsque la structure des pages change.
5. Enregistrer les changements dans Git avec un message de commit explicite, puis vérifier le site publié.

La copie de travail est le clone Git tenu dans Google Drive : **`G:\Mon Drive\Eau-energie\Github`**. Les modifications s'y font, puis sont publiées depuis GitHub Desktop :

1. **Commit to main** avec un message explicite.
2. **Push origin** vers `Eau-Energie/eau-energie.github.io`.
3. GitHub Pages republie www.eau-energie.fr en une ou deux minutes (onglet *Actions*, ligne « pages build and deployment »).

L'ancien dossier `Eau-energie\Web (archive)` (ex-`03-site Web`) est conservé pour mémoire, avec les brouillons SEO du 19 octobre 2026 ; il ne sert plus à publier.

## Référencement et maintenance

Lors de toute intervention, porter une attention particulière aux éléments suivants :

- Balises `<title>`, descriptions, URL canoniques et données de partage social.
- Liens internes, images et autres ressources référencées.
- Fichiers `robots.txt`, `sitemap.xml` et `sitemap-news.xml`.
- Compatibilité mobile, accessibilité et temps de chargement.

## Contact

**Cabinet Eau-Énergie**  
Site : [www.eau-energie.fr](https://www.eau-energie.fr/)  
Courriel : [contact@eau-energie.fr](mailto:contact@eau-energie.fr)

## Droits

Les contenus, photographies, textes et documents publiés sur ce site demeurent soumis aux droits de leurs titulaires. Aucune licence open source n'est présumée pour l'ensemble du dépôt en l'absence d'un fichier de licence explicite.
