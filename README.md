# Projet TypeScript - Voiture

Ce projet est une démonstration simple de l'utilisation de TypeScript pour modéliser une classe `Voiture` avec une interface `Véhicule`.

## Structure des fichiers

- **voiture.ts** : Contient la définition de l'interface `Véhicule` et l'implémentation de la classe `Voiture`.
- **dist/voiture.js** : Fichier JavaScript généré après la compilation de `voiture.ts`.
- **tsconfig.json** : Fichier de configuration TypeScript.
- **index.html** : Fichier HTML pour inclure le script compilé.

## Instructions

1. Assurez-vous d'avoir TypeScript installé globalement :
   ```bash
   npm install -g typescript
   ```

2. Compilez le fichier TypeScript :
   ```bash
   tsc
   ```

3. Ouvrez `index.html` dans un navigateur pour exécuter le script.

## Fonctionnalités

- La classe `Voiture` implémente l'interface `Véhicule`.
- Une méthode `start()` permet de simuler le démarrage d'une voiture.

## Configuration TypeScript

Le fichier `tsconfig.json` configure le compilateur TypeScript pour :
- Générer les fichiers compilés dans le dossier `dist`.
- Cibler la version ES2024 de JavaScript.
- Activer les vérifications strictes.