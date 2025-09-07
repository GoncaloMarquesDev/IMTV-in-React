import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import CastCard from "../castcard/CastCard";
import CrewCard from "../crewcard/CrewCard";
import MoreLikeThis from "../morelikethis/MorelikeThis";
import Loading from "../loading/Loading";
import "./MovieInfo.css";

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  console.log("movie genres", movie);

  const [selectedMovieId, setSelectedMovieId] = useState(id);

  const genres = movie?.genres;
  const genresById = genres?.map((genre) => genre.id);
  const genresByIdString = genresById?.join(",");
  console.log("genresByIdString", genresByIdString);

  const movieInfoRef = useRef(null);

  const scrollToInfo = () => {
    if (movieInfoRef.current) {
      movieInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg",
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );
      const data = await response.json();
      console.log("data", data);
      setMovie(data);
    };

    if (id) fetchMovie();
  }, [id]);

  if (!movie) return <Loading />;
  if (movie.success === false) return <p>Not found</p>;

  return (
    <div>
      <section
        className="movie-hero"
        style={{
          backgroundImage: movie?.backdrop_path
            ? `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
            : "none",
        }}
      >
        <div className="movie-hero-content">
          <div className="movie-poster" ref={movieInfoRef}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div className="movie-details">
            <h1>{movie.title}</h1>
            <p className="rating">★ {movie.vote_average.toFixed(1)}/10</p>
            <p>
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </p>
            <p> {movie.release_date?.slice(0, 4)}</p>
            <div className="movie-genres">
              {movie.genres?.map((genre) => (
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
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className="cast">
        <CastCard id={id} type={"movie"} />
        <CrewCard id={id} type={"movie"} />
        <MoreLikeThis
          type={"movie"}
          genres={genresByIdString}
          movieId={selectedMovieId}
          onSelectMovie={setSelectedMovieId}
          onMovieClick={scrollToInfo}
        />
      </div>
    </div>
  );
}

export default MovieInfo;
