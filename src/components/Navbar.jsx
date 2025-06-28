import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { IoMenu } from "react-icons/io5";
import { searchMovies } from "../Services/api";
import { useState } from "react";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    try {
      const searchedMovie = await searchMovies(searchQuery);
      setMovies(searchedMovie);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movie..");
    } finally {
      setLoading(false);
    }
    // setSearchQuery("");
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Cinepedia</Link>
      </div>

      <div className="navbar-search">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link nav-op">
          Home
        </Link>
        <Link to="/favourites" className="nav-link nav-op">
          Favourites
        </Link>
        <Link to="/about" className="nav-link nav-op">
          About
        </Link>
        <IoMenu
          className="burger-icon"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button
              className="close-btn"
              onClick={() => setIsDropdownOpen(false)}
            >
              ✕
            </button>
            <Link
              to="/"
              className="dropdown-link"
              onClick={() => setIsDropdownOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/favourites"
              className="dropdown-link"
              onClick={() => setIsDropdownOpen(false)}
            >
              Favourites
            </Link>
            <Link
              to="/about"
              className="dropdown-link"
              onClick={() => setIsDropdownOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
