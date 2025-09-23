import { useEffect, useState } from "react";
import CardMoviesSeries from "../cardmoviesseries/CardMoviesSeries";
import PopularMovies from "../popularmovies/PopularMovies";
import NowPlaying from "../nowplaying/NowPlaying";
import SeriesAiring from "../seriesairing/SeriesAiring";
import TopRatedMovies from "../topratedmovies/TopRatedMovies";
import Pagination from"../pagination/Pagination"
import Loading from "../loading/Loading";
import "./MoviesList.css";

function MoviesList() {
  const [moviesList, setMoviesList] = useState({ results: [] });
  console.log("lista filmes popular", moviesList);
  const [loading, setLoading] = useState(true); // estado de loading
  const [error, setError] = useState(null); // estado de erro
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const BASE_URL = "https://api.themoviedb.org/3";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg";

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      };

      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular?page=${page}`,
          options
        );
        const data = await response.json();

        if (data.success === false) {
          throw new Error("Error loading popular movies");
        }

        setMoviesList(data);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  if (loading) return <Loading />;
  if (error) return "not found";

  return (
    <div className="main-movies">
      <div className="categories">
        <PopularMovies movies={moviesList} />
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        <NowPlaying />
        <TopRatedMovies type={"movie"} />
        <SeriesAiring />
      </div>
    </div>
  );
}

export default MoviesList;
