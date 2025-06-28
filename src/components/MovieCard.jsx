import "../css/MovieCard.css";
import { useContext } from "react";
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

        <div className="movie-overlay">
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
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}
export default MovieCard;
