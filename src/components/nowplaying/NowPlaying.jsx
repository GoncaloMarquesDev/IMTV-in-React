import { useEffect, useState } from "react";
import { Link } from "react-router";
import CardMoviesSeries from "../cardmoviesseries/CardMoviesSeries";
import Loading from "../loading/Loading";

function NowPlaying() {
  const [playingMovies, setPlayingMovies] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayingMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg",
        },
      };

      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          options
        );
        const data = await response.json();

        if (data.success === false) {
          throw new Error("Error Loading");
        }

        setPlayingMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayingMovies();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="category-container-Playing_Top_airing">
      <h2>Now Playing</h2>
      <div className="category-flex-Playing_Top_airing">
        {playingMovies.results.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="card-wrapper" key={movie.id}>
              <CardMoviesSeries movie={movie} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NowPlaying;
