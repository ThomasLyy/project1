# Gestion des Webtoons

Une application web pour gérer des webtoons, développée avec Next.js, TypeScript, Prisma, Tailwind CSS et DaisyUI.

## **Table des matières**

- [Gestion des Webtoons](#gestion-des-webtoons)
  - [**Table des matières**](#table-des-matières)
  - [**Aperçu**](#aperçu)
  - [**Fonctionnalités**](#fonctionnalités)
  - [**Technologies Utilisées**](#technologies-utilisées)
  - [**Prérequis**](#prérequis)
  - [**Installation**](#installation)
  - [**Configuration**](#configuration)
  - [**Exécution du Projet**](#exécution-du-projet)
  - [**Scripts Disponibles**](#scripts-disponibles)
  - [**Structure du Projet**](#structure-du-projet)
  - [**Contribuer**](#contribuer)
  - [**Licence**](#licence)
  - [**Notes Supplémentaires**](#notes-supplémentaires)

---

## **Aperçu**

Cette application permet aux utilisateurs de :

- Ajouter de nouveaux webtoons.
- Modifier les webtoons existants.
- Supprimer des webtoons.
- Visualiser une liste de webtoons avec leurs détails.
- Changer le thème de l'application (clair, sombre, pastel).

## **Fonctionnalités**

- **CRUD Complet** : Créez, lisez, mettez à jour et supprimez des webtoons.
- **Interface Moderne** : Utilisation de Tailwind CSS et DaisyUI pour un design épuré et réactif.
- **Thèmes Personnalisables** : Choisissez parmi plusieurs thèmes pour l'apparence de l'application.
- **Expérience Utilisateur Améliorée** : Modales pour la confirmation des actions et retours visuels.
- **Gestion de l'État** : Utilisation de React Query pour gérer les données côté client.

## **Technologies Utilisées**

- **[Next.js](https://nextjs.org/)** : Framework React pour les applications web modernes.
- **[TypeScript](https://www.typescriptlang.org/)** : Superset JavaScript typé.
- **[Prisma](https://www.prisma.io/)** : ORM pour Node.js et TypeScript.
- **[React Query](https://tanstack.com/query/latest/)** : Gestion de l'état côté client pour les requêtes asynchrones.
- **[Tailwind CSS](https://tailwindcss.com/)** : Framework CSS utilitaire.
- **[DaisyUI](https://daisyui.com/)** : Composants UI pour Tailwind CSS.
- **[SQLite](https://www.sqlite.org/index.html)** : Base de données légère pour le développement.

## **Prérequis**

- **Node.js** version 14 ou supérieure
- **npm** version 6 ou supérieure

## **Installation**

1. **Cloner le Répertoire**

   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   ```

2. **Installer les Dépendances**

   ```bash
   npm install next react react-dom typescript @types/react @types/node tailwindcss postcss autoprefixer prisma @prisma/client @tanstack/react-query axios daisyui
   ```

## **Configuration**

1. **Configurer les Variables d'Environnement**

   Créez un fichier `.env` à la racine du projet et ajoutez la variable suivante :

   ```env
   DATABASE_URL="file:./dev.db"
   ```

   Cette configuration utilise une base de données SQLite nommée `dev.db` dans le dossier `prisma`.

2. **Initialiser la Base de Données avec Prisma**

   Générer le client Prisma et exécuter les migrations :

   ```bash
   npx prisma migrate dev --name init
   ```

   Cela créera la base de données SQLite et appliquera le schéma défini dans `prisma/schema.prisma`.

## **Exécution du Projet**

Lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000).

## **Scripts Disponibles**

- **`npm run dev`** : Lance le serveur de développement.
- **`npm run build`** : Construit l'application pour la production.
- **`npm start`** : Démarre le serveur en mode production.
- **`npx prisma studio`** : Lance Prisma Studio pour explorer la base de données.

## **Structure du Projet**

```
├── prisma/
│   ├── schema.prisma    # Schéma de la base de données Prisma
│   └── dev.db           # Base de données SQLite (générée après les migrations)
├── pages/
│   ├── api/
│   │   └── webtoons/
│   │       └── index.ts # Routes API pour les webtoons
│   └── index.tsx        # Page principale de l'application
├── components/
│   ├── WebtoonForm.tsx  # Composant pour le formulaire de webtoon
│   └── WebtoonList.tsx  # Composant pour la liste des webtoons
├── styles/
│   └── globals.css      # Fichier CSS global avec Tailwind CSS
├── public/
│   └── ...              # Fichiers publics (images, icônes, etc.)
├── .gitignore           # Fichiers à ignorer par Git
├── package.json         # Dépendances et scripts du projet
├── tailwind.config.js   # Configuration de Tailwind CSS et DaisyUI
├── tsconfig.json        # Configuration TypeScript
└── README.md            # Documentation du projet
```

## **Contribuer**

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet :

1. **Forkez le dépôt**
2. **Créez une branche pour votre fonctionnalité**

   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```

3. **Commitez vos changements**

   ```bash
   git commit -m "Ajout de ma nouvelle fonctionnalité"
   ```

4. **Poussez vers la branche**

   ```bash
   git push origin feature/ma-fonctionnalite
   ```

5. **Ouvrez une Pull Request**

## **Licence**

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.

---

## **Notes Supplémentaires**

- **Personnalisation des Thèmes**

  Vous pouvez personnaliser ou ajouter des thèmes en modifiant la configuration de DaisyUI dans `tailwind.config.js`.

- **Extension du Schéma Prisma**

  Si vous souhaitez ajouter de nouvelles fonctionnalités, vous pouvez modifier le schéma Prisma et exécuter de nouvelles migrations.

- **Déploiement**

  Pour déployer l'application en production, assurez-vous de configurer correctement les variables d'environnement et de suivre les bonnes pratiques de déploiement pour Next.js.

---

Si vous avez des questions ou rencontrez des problèmes, n'hésitez pas à ouvrir une issue ou à me contacter.

Bonne utilisation !

