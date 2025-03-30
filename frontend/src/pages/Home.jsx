import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Bienvenue sur Student Hub 🎓</h1>
      <p className="mt-4">Un espace dédié aux étudiants pour partager et apprendre.</p>
      <Link to="/about" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        En savoir plus
      </Link>
    </div>
  );
}
