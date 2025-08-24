import { Link } from "react-router";
import CardMoviesSeries from "./CardMoviesSeries";
import Loading from "./Loading";
import { useEffect, useState } from "react";

function MoreLikeThis({ genres, movieId, onSelectMovie, onMovieClick, type }) {
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  console.log("type:", type);
  useEffect(() => {
    const fetchMoreLikeThis = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg",
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/${type}?api_key=d72c2ce66e41c2929899bb256f1c4db5&with_genres=${genres}`,
        options
      );
      const data = await response.json();

      // Filtra para remover o filme atual da lista
      const filteredMovies = data.results.filter(
        (movie) => Number(movie.id) !== Number(movieId)
      );

      setMoviesByGenre(filteredMovies);
    };

    if (genres && movieId) fetchMoreLikeThis();
  }, [genres, movieId]);

  if (!moviesByGenre.length) return <Loading />;

  return (
    <div className="category_more_like_this">
      <h2>More Like This</h2>
      <div className="category-flex-Playing_Top_airing">
        {moviesByGenre.map((movie) => (
          <Link
            key={movie.id}
            to={`/${type}/${movie.id}`}
            onClick={() => {
              onMovieClick();
              onSelectMovie(movie.id);
            }}
          >
            <CardMoviesSeries movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoreLikeThis;
