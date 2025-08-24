import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import CastCard from "./CastCard";
import CrewCard from "./CrewCard";
import MoreLikeThis from "./MorelikeThis";
import Loading from "./Loading";
/* import SeriesList from "./seriesList"; */

function SeriesInfo() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  console.log("movie genres", serie);

  const [selectedSeriesId, setSelectedSeriesId] = useState(id);

  const genres = serie?.genres;
  const genresById = genres?.map((genre) => genre.id);
  const genresByIdString = genresById?.join(",");
  console.log("genresByIdString", genresByIdString);

  const serieInfoRef = useRef(null);

  const scrollToInfo = () => {
    if (serieInfoRef.current) {
      serieInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchTvShow = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg",
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}`,
        options
      );
      const data = await response.json();
      console.log("data procura das series", data);
      setSerie(data);
    };

    if (id) fetchTvShow();
  }, [id]);
  if (!serie) return <Loading />;
  if (serie.success === false) return <p>Serie não encontrado.</p>;

  return (
    <div>
      <section
        className="movie-hero"
        style={{
          backgroundImage: serie?.backdrop_path
            ? `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/w1280${serie.backdrop_path})`
            : "none",
        }}
      >
        <div className="movie-hero-content">
          <div className="movie-poster" ref={serieInfoRef}>
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              alt={serie.name}
            />
          </div>

          <div className="movie-details">
            <h1>{serie.name}</h1>
            <p className="rating">★ {serie.vote_average.toFixed(1)}/10</p>
            <p> {serie.first_air_date?.slice(0, 4)}</p>
            <p>
              {`${serie?.number_of_seasons ?? 0} ${
                serie?.number_of_seasons === 1 ? "Season" : "Seasons"
              }`}
            </p>
            <p> {serie.release_date?.slice(0, 4)}</p>
            <div className="movie-genres">
              {serie.genres?.map((genre) => (
                <span key={genre.id} className="genre-chip">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="content">
        <div className="overview">
          <h1>Overview</h1>
          <p>{serie.overview}</p>
        </div>
      </div>
      <div className="cast">
        <CastCard id={id} type={"tv"} />
        <CrewCard id={id} type={"tv"} />
        <MoreLikeThis
          type={"tv"}
          genres={genresByIdString}
          movieId={selectedSeriesId}
          onSelectMovie={(id) => setSelectedSeriesId(id)} // função que atualiza o id
          onMovieClick={scrollToInfo}
        />
      </div>
    </div>
  );
}

export default SeriesInfo;
