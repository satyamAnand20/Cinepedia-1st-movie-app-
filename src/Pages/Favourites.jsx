import "../css/Favourites.css"
import { useContext } from "react";
import { FavouritesContext } from "../Contexts/FavouritesContext";
import MovieCard from "../components/MovieCard";
function Favourites() {
  const { favourites } = useContext(FavouritesContext);

  if (favourites.length === 0) {
    return <h2>No Favourites Yet</h2>;
  }
  return (
    <div>
      <h2>Your Favourites</h2>
      <div className="favourites-grid">
      {favourites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
  );
}
 

export default Favourites;
