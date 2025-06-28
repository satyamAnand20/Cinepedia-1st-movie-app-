import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    //get data from local storage
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });
  //save into local storage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  //add to favourites
  const addFavourites = (movie) => {
    if (!favourites.find((m) => m.imdbID === movie.imdbID)) {
      setFavourites([...favourites, movie]);
    }
  };
  //remove from favourites
  const removeFavourites = (imdbID) => {
    setFavourites(favourites.filter((m) => m.imdbID !== imdbID));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourites, removeFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};
