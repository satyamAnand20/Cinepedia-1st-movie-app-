
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home({ movies, loading, error }) {
  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))
          ) : (
            <p className="no-results">No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
