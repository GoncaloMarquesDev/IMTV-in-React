import { useContext } from "react";
import { FavoritesContext } from "../favoritecontext/FavoriteContext";
import StarRating from "../starrating/StarRating";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./CardMoviesSeries.css";

function CardMoviesSeries({ movie }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = movie && favorites.some((m) => m.id === movie.id);

  return (
    <div className="card-movies">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={movie?.title}
      />
      <h3 title={movie?.title}>{movie?.title}</h3>
      <p>{movie?.release_date?.slice(0, 4)}</p>

      <StarRating rating={(movie?.vote_average || 0) / 2} />

      <button
        className="favorite-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(movie);
        }}
      >
        {isFav ? (
          <FaHeart color="red" size={20} />
        ) : (
          <FaHeart color="white" size={20} />
        )}
      </button>
    </div>
  );
}
export default CardMoviesSeries;
