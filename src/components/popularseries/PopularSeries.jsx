import { Link } from "react-router";
import CardMoviesSeries from "../cardmoviesseries/CardMoviesSeries";
import "./PopularSeries.css";

function PopularSeries({ series }) {
  function normalizeToMovie(obj, type = "movie") {
    return {
      id: obj.id,
      title: type === "movie" ? obj.title : obj.name,
      release_date: type === "movie" ? obj.release_date : obj.first_air_date,
      poster_path: obj.poster_path,
      vote_average: obj.vote_average,
    };
  }
  return (
    <div className="category-popular">
      <h2>Tv - Shows</h2>

      <div className="movies-grid">
        {series.results.map((serie) => (
          <Link to={`/tv/${serie.id}`} key={serie.id}>
            <div className="card-wrapper">
              <CardMoviesSeries movie={normalizeToMovie(serie, "serie")} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default PopularSeries;
