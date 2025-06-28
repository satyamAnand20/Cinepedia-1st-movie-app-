const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const keywords = ["action", "comedy", "romance", "thriller", "drama", "sci-fi"];

export const getPopularMovies = async () => {
  let allMovies = [];

  for (let keyword of keywords) {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${keyword}&type=movie&page=1`
    );
    const data = await response.json();
    if(Array.isArray(data.Search)){
        const filtered = data.Search.filter((movie)=>{
            const year = parseInt(movie.Year);
            return !isNaN(year) && year >1999;
        })
    allMovies= allMovies.concat(filtered)

    }
  }




  return allMovies;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`
  );
  const data = await response.json();
  return data.Search || [];
};

