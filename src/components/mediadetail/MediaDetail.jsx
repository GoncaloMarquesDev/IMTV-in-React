import "./MediaDetail.css";

function MediaDetail({ media }) {
  if (!media) return null;

  const isMovie = !!media.runtime; // runtime só existe em filmes
  const title = media.title || media.name; // filmes têm title, séries name
  const releaseYear =
    media.release_date?.slice(0, 4) || media.first_air_date?.slice(0, 4);

  return (
    <div className="media-details">
      <h1>{title}</h1>
      <p className="rating">★ {media.vote_average?.toFixed(1)}/10</p>

      {isMovie ? (
        <p>
          {Math.floor(media.runtime / 60)}h {media.runtime % 60}m
        </p>
      ) : (
        <p>
          {`${media.number_of_seasons ?? 0} ${
            media.number_of_seasons === 1 ? "Season" : "Seasons"
          }`}
        </p>
      )}

      <p>{releaseYear}</p>

      <div className="media-genres">
        {media.genres?.map((genre) => (
          <span key={genre.id} className="genre-chip">
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MediaDetail;
