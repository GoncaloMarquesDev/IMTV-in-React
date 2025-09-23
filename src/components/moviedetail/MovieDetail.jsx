import "./MovieDetail.css";
function MovieDetails({ title, rating, runtime, releaseDate, genres }) {
  return (
    <div className="movie-details">
      <h1>{title}</h1>
      <p className="rating">★ {rating.toFixed(1)}/10</p>
      <p>
        {Math.floor(runtime / 60)}h {runtime % 60}m
      </p>
      <p>{releaseDate?.slice(0, 4)}</p>
      <div className="movie-genres">
        {genres?.map((genre) => (
          <span key={genre.id} className="genre-chip">
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;
