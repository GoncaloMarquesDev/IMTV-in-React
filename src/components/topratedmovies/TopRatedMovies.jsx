import { useEffect, useState } from "react";
import { Link } from "react-router";
import CardMoviesSeries from "../cardmoviesseries/CardMoviesSeries";
import Loading from "../loading/Loading";
import "./TopRatedMovies.css";

function TopRatedMovies({ movie }) {
  const [topRatedMovies, settopRatedMovies] = useState({ results: [] });

  console.log("top rated movies", topRatedMovies);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg",
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated`,
        options
      );
      const data = await response.json();
      console.log("rated movies", data);
      settopRatedMovies(data);
    };
    fetchTopRatedMovies();
    // if (id) fetchPlayingMovie(); //verificar se depois n é preciso
  }, []);

  if (!topRatedMovies.results.length) return <Loading />;
  return (
    <div className="category-container-Playing_Top_airing">
      <h2>Top Rated</h2>
      <div className="category-flex-Playing_Top_airing">
        {topRatedMovies.results.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <CardMoviesSeries movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default TopRatedMovies;
