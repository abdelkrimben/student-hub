import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">À propos de Student Hub</h1>
      <p className="mt-4">Notre mission est d'aider les étudiants à collaborer et progresser.</p>
      <Link to="/" className="mt-4 inline-block bg-gray-500 text-white px-4 py-2 rounded">
        Retour à l'accueil
      </Link>
    </div>
  );
}
