const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const keywords = ["fight", "fast", "saga", "kung-fu", "karate kid"];

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
        const detailedMovies = await Promise.all(
          filtered.map(async (movie) =>{
            try{
            const detailResponse = await fetch(
              `${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}&plot=full`
            );
            return await detailResponse.json();
          }
          catch{
            return movie;
          }
          })
        )
    allMovies= allMovies.concat(detailedMovies);
    }
  }
  return allMovies;
};


export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`
  );
  const data = await response.json();
  const detailedMovies = await Promise.all(
    data.Search.map(async (movie)=>{
      try{
        const detailResponse = await fetch(
          `${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}&plot=full`
        );
        return await detailResponse.json();
      }
      catch{
        return movie;
      }
    })
  )
  console.log(detailedMovies);
  return detailedMovies;
};


export const getDetailsById = async (id) =>{
  const response = await fetch (
    `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
  );
  const movieDetails = await response.json();
  return movieDetails;
  

}

