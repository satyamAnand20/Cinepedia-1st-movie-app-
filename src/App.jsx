
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./Pages/home";
import Navbar from "./components/Navbar";
import Favourites from "./Pages/Favourites";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "./Services/api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load popular movies on first render
  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popular = await getPopularMovies();
        setMovies(popular);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  // Handle search submit from Navbar
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSubmit={handleSearchSubmit}
      />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={movies}
                loading={loading}
                error={error}
              />
            }
          />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

