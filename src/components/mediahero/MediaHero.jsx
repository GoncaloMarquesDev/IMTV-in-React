import "./MediaHero.css";

function MediaHero({ media, mediaInfoRef }) {
  if (!media) return null;

  return (
    <section>
      <div className="media-hero-content">
        <div className="media-poster" ref={mediaInfoRef}>
          <img
            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
            alt={media.title || media.name} // usa title (filme) ou name (série)
          />
        </div>
      </div>
    </section>
  );
}

export default MediaHero;
