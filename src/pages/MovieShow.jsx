import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieShow() {
  const { id } = useParams(); // prende l'id dalla URL
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then(res => {
        setMovie(res.data.movie);
        setReviews(res.data.reviews);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Errore nel recuperare il film");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p><strong>Regista:</strong> {movie.director}</p>
      <p><strong>Genere:</strong> {movie.genre}</p>
      <p><strong>Anno:</strong> {movie.release_year}</p>
      <p>{movie.abstract}</p>

      <h2>Recensioni</h2>
      {reviews.length === 0 ? (
        <p>Nessuna recensione disponibile</p>
      ) : (
        <ul>
          {reviews.map(r => (
            <li key={r.id}>
              <strong>{r.name}</strong> ({r.vote}/5): {r.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}