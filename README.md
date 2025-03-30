#  Student Hub

Student Hub est une plateforme conçue pour aider les étudiants à collaborer, partager des ressources et progresser ensemble.

## Stack utilisée
- **Frontend** : Vite + React + Shadcn + TailwindCSS
- **Backend** : Express.js (non inclus ici)

### Structure du projet
student-hub/
|-- backend/       # Serveur Express.js
|-- frontend/      # Interface utilisateur React
|-- README.md      # Documentation du projet
|--.gitignore     # Fichiers à ignorer par Git

### Installation et Exécution

1. Cloner le projet

git clone https://github.com/abdelkrimben/student-hub.git
cd student-hub

2. Installation du Backend

cd backend
npm install
node server.js

@ Le backend tourne maintenant sur http://localhost:3000

3. Installation du Frontend

cd ../frontend
npm install
npm run dev

@ Le frontend est accessible sur http://localhost:5173

@ Contribuer

Fork le repo

Crée une branche (git checkout -b feature-nom)

Commit tes modifications (git commit -m "Ajout d'une fonctionnalité")

Push la branche (git push origin feature-nom)

Ouvre une Pull Request

###### Licence

Ce projet est sous licence MIT.