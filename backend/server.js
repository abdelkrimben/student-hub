const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Active CORS pour toutes les routes
app.use(cors());

// Route GET pour récupérer des ressources
app.get('/api/resources', (req, res) => {
  res.json([
    { id: 1, title: "React Docs", url: "https://react.dev" },
    { id: 2, title: "Tailwind CSS", url: "https://tailwindcss.com" }
  ]);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});