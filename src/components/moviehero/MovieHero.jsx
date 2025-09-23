import "./MovieHero.css";

function MovieHero({ movie, movieInfoRef }) {
  if (!movie) return null;

  return (
    <section>
      <div className="movie-hero-content">
        <div className="movie-poster" ref={movieInfoRef}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>
    </section>
  );
}

export default MovieHero;
