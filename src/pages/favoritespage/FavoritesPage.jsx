import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoriteContext";
import CardMoviesSeries from "../../components/cardmoviesseries/CardMoviesSeries";
import { Link } from "react-router";
import "./FavoritesPage.css";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <p>No films or tv-shows on favorites</p>;
  }
  console.log("Favorites:", favorites);

  return (
    <div className="category-favorite">
      <h2>Favorites</h2>

      <div className="favorite-flex">
        {favorites.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="card-wrapper">
              <CardMoviesSeries movie={movie} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
