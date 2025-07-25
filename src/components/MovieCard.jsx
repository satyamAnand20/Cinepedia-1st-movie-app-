import "../css/MovieCard.css";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { FavouritesContext } from "../Contexts/FavouritesContext";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  const { favourites, addFavourites, removeFavourites } =
    useContext(FavouritesContext);

  const isFavourites = favourites.some((m) => m.imdbID === movie.imdbID);
  return (
    <>
      <div className="movie-card">
        <Link to={`/details/${movie.imdbID}`} className="no-style-link">
          <div className="movie-poster">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              loading="lazy"
              alt={movie.Title}
            />

            <div className="movie-overlay"></div>
          </div>
        </Link>
        <div className="movie-info">
          <Link to={`/details/${movie.imdbID}`} className="no-style-link">
            <h3>{movie.Title}</h3>
          </Link>
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
    </>
  );
}
export default MovieCard;
