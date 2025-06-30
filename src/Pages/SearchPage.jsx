import MovieCard from "../components/MovieCard";
import "../css/Home.css";
function SearchPage({ searchedMovies, loading, error }) {
  return (
    <div className="search-movie-page">
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {searchedMovies.length > 0 ? (
            searchedMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))
          ) : (
            <div className="no-results">No movies found.</div>
          )}
        </div>
      )}
    </div>
  );
}
export default SearchPage;
