import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; //
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState([]); // Stato per salvare i film
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const [error, setError] = useState(null); // Stato per errori

  useEffect(() => {
    // Chiamata al backend Express
    axios.get("http://localhost:3000/movies")
      .then(response => {
        setMovies(response.data); // Salva i film nello stato
        setLoading(false); // Fine caricamento
      })
      .catch(err => {
        console.error(err);
        setError("Errore nel recuperare i film");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento film...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista dei film</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {/* Titolo cliccabile che porta alla pagina dettaglio */}
            <Link to={`/movies/${movie.id}`}>
              <strong>{movie.title}</strong>
            </Link> ({movie.release_year}) - {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
}