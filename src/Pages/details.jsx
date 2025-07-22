import { useParams } from "react-router-dom";
import { getDetailsById } from "../Services/api";
import { useEffect, useState } from "react";
import "../css/Details.css";
import { LiaImdb } from "react-icons/lia";
import { useContext } from "react";
import { FavouritesContext } from "../Contexts/FavouritesContext";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const { favourites, addFavourites, removeFavourites } =
    useContext(FavouritesContext);
  const isFavourites =
    movie && favourites.some((m) => m.imdbID === movie.imdbID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDetailsById(id);
        console.log(data);
        setMovie(data);
      } catch (err) {
        setError("Failed to fetch movie details!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (error) return <div>{error}</div>;

  return (
    <div className="details-page">
      {loading ? (
        <div>Loading...</div>
      ) : movie ? (
        <div className="main-container">
          <h2 className="movie-title-mobile">{movie.Title}</h2>
          <div className="year-runtime-mobile">
            <p className="all-p">{movie.Year}</p>
            <p>•</p>
            <p className="all-p">{movie.Runtime}</p>
            <p>•</p>
            <p className="all-p">
              ⭐<span className="main-rating">{movie.imdbRating}</span>
              <span className="by-10">/10</span>
            </p>
          </div>
          <div className="poster-info-div">
            <div className="poster-favbtn">
              <div className="movie-poster">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={movie.Title}
                />
              </div>
              <button
                className="details-favourite-btn"
                onClick={() => {
                  !isFavourites
                    ? addFavourites(movie)
                    : removeFavourites(movie.imdbID);
                }}
              >
                {isFavourites ? (
                  <span className="details-favourite-word">
                    Remove from Favourites
                  </span>
                ) : (
                  <span className="details-favourite-word">
                    Add to Favourites
                  </span>
                )}
              </button>
            </div>
            <div className="movie-info">
              <h2 className="movie-title-desktop">{movie.Title}</h2>
              <div className="year-runtime">
                <p className="all-p">{movie.Year}</p>
                <p>•</p>
                <p className="all-p">{movie.Runtime}</p>
              </div>
              {/* <p className="all-p genre-class-desktop">{movie.Genre}</p> */}
              <div className="genre-tags genre-class-desktop">
                {movie.Genre.split(", ").map((genre, index) => (
                  <span key={index} className="genre-pill">
                    {genre}
                  </span>
                ))}
              </div>

              <div className="imdb-rating">
                <LiaImdb className="icon" />
                <p className="all-p">
                  <span>{movie.imdbRating}</span>/10
                </p>
              </div>
            </div>
          </div>
          <div className="plot-director-writer">
            <table className="plot-table">
              <tr className="genre-class-mobile">
                <td className="plot-label">
                  <h3>Genre</h3>
                </td>
                <td>
                  <p className="genre-tags">
                    {movie.Genre.split(", ").map((genre, index) => (
                      <span key={index} className="genre-pill">
                        {genre}
                      </span>
                    ))}
                  </p>
                </td>
              </tr>
              <tr>
                <td className="plot-label">
                  <h3>Plot</h3>
                </td>
                <td>
                  <p
                    className={`all-p ${isExpanded ? "expanded" : "clamped"}`}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {movie.Plot}
                  </p>
                </td>
              </tr>

              <tr>
                <td className="plot-label">
                  <h3>Director</h3>
                </td>
                <td>
                  <p className="all-p">{movie.Director}</p>
                </td>
              </tr>

              <tr>
                <td className="plot-label">
                  <h3>Writer</h3>
                </td>
                <td>
                  <p className="all-p">{movie.Writer}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      ) : (
        <div>No movie found.</div>
      )}
    </div>
  );
}

export default Details;
