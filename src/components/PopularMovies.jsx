import { Link } from "react-router";
import CardMoviesSeries from "./CardMoviesSeries";

function PopularMovies({ movies }) {
  return (
    <div className="category-popular">
      <h2>Popular Films</h2>

      <div className="movies-grid">
        {movies.results.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="card-wrapper">
              <CardMoviesSeries movie={movie} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default PopularMovies;
