import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function Navbar({ searchQuery, setSearchQuery, onSubmit }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Cinepedia</Link>
      </div>

      <div className="navbar-search">
        <form onSubmit={onSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {!showSearchInput && (
        <CiSearch
          className="search-icon"
          onClick={() => setShowSearchInput(true)}
        />
      )}

      {showSearchInput && (
        <div className="mobile-search">
          <button
            className="close-btn2"
            onClick={() => setShowSearchInput(false)}
          >
            ✕
          </button>
          <form onSubmit={onSubmit} className="search-form2">
            <input
              type="text"
              placeholder="Search for movies..."
              className="search-input2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      )}

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
