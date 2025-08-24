import { useEffect, useState } from "react";
import { Link } from "react-router";
import CardMoviesSeries from "./CardMoviesSeries";
import Loading from "./Loading";

function TopRatedSeries() {
  function normalizeToMovie(obj, type = "movie") {
    return {
      id: obj.id,
      title: type === "movie" ? obj.title : obj.name,
      release_date: type === "movie" ? obj.release_date : obj.first_air_date,
      poster_path: obj.poster_path,
      vote_average: obj.vote_average,
    };
  }

  const [topRatedSeries, setTopRatedSeries] = useState({ results: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("top Rated Series", topRatedSeries);

  useEffect(() => {
    const fetchTopRatedSeries = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg",
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/tv/top_rated`,
          options
        );

        if (!response.ok) {
          throw new Error("Loadind ERROR (HTTP " + response.status + ")");
        }

        const data = await response.json();
        console.log("rated series", data);
        setTopRatedSeries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTopRatedSeries();
  }, []);
  if (!topRatedSeries.results.length) return <Loading />;

  return (
    <div className="category-container-Playing_Top_airing">
      <h2>Top Rated</h2>
      <div className="category-flex-Playing_Top_airing">
        {topRatedSeries.results.map((serie) => (
          <Link to={`/tv/${serie.id}`} key={serie.id}>
            <CardMoviesSeries movie={normalizeToMovie(serie, "serie")} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default TopRatedSeries;
