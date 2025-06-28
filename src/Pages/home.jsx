import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../Services/api";
import "../css/Home.css";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  // const movies = [
  //   { id: 1, title: "John Wick", release_date: "2020" },
  //   { id: 2, title: "Terminator", release_date: "2023" },
  //   { id: 3, title: "Fury", release_date: "2019" },
  //   { id: 4, title: "War", release_date: "2024" },
  // ];
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        // console.log("Fetched popular movies:", popularMovies);
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
    
  }, []);

  

  return (
    <div className="home">
      
      {error ? <div className="error-message">{error}</div>:null}
      {loading ? (<div className="loading">loading...</div>):(
        <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
      )}
      
    </div>
  );
}

export default Home;
