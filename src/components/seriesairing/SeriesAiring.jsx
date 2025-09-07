import { Link } from "react-router";
import { useAiringToday } from "../../context/AirinTodayContext";
import MovieCard from "../MovieCard";
import CardMoviesSeries from "../cardmoviesseries/CardMoviesSeries";
import Loading from "../loading/Loading";
import "./SeriesAiring.css";

function SeriesAiring() {
  function normalizeToMovie(obj, type = "movie") {
    return {
      id: obj.id,
      title: type === "movie" ? obj.title : obj.name,
      release_date: type === "movie" ? obj.release_date : obj.first_air_date,
      poster_path: obj.poster_path,
      vote_average: obj.vote_average,
    };
  }
  const { airingToday } = useAiringToday();
  console.log("airingToday", airingToday);

  if (!airingToday.results.length) return <Loading />;

  return (
    <div className="category-container-Playing_Top_airing">
      <h2>Airing Today</h2>
      <div className="category-flex-Playing_Top_airing">
        {airingToday.results.map((serie) => (
          <Link to={`/tv/${serie.id}`} key={serie.id}>
            <CardMoviesSeries movie={normalizeToMovie(serie, "serie")} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default SeriesAiring;
