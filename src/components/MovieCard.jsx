import "../css/MovieCard.css";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { FavouritesContext } from "../Contexts/FavouritesContext";
function MovieCard({ movie }) {
  const { favourites, addFavourites, removeFavourites } =
    useContext(FavouritesContext);

  const isFavourites = favourites.some((m) => m.imdbID === movie.imdbID);
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={movie.Title}
        />

        <div className="movie-overlay"></div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>

        <button
          className="favourite-btn"
          onClick={() => {
            !isFavourites
              ? addFavourites(movie)
              : removeFavourites(movie.imdbID);
          }}
        >
          {isFavourites ? (
            <span className="favourite-word">Remove from Favourites</span>
          ) : (
            <span className="favourite-word">Add to Favourites</span>
          )}
        </button>

        <button
          className="heart-fav-btn"
          onClick={() => {
            !isFavourites
              ? addFavourites(movie)
              : removeFavourites(movie.imdbID);
          }}
        >
          <FaHeart
            className={
              !isFavourites
                ? "white-heart-icon common-heart-icon"
                : "red-heart-icon common-heart-icon"
            }
          />
        </button>
      </div>
    </div>
  );
}
export default MovieCard;
