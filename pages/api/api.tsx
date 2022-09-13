//Set the TMBD Popular Movies API
const { TMBD_API_KEY, TMBD_POPULAR_URL, TMBD_TRENDING_URL, TMBD_QUERY } =
  process.env;

//Get Populars movies from TMDB API using async/await
export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${TMBD_POPULAR_URL}?api_key=${TMBD_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results;
};

//Get Trending movies from TMDB API using async/await
export const getTrendingMovies = async () => {
  const res = await fetch(
    `${TMBD_TRENDING_URL}?api_key=${TMBD_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results;
};

//Get Movie Query from TMDB API using async/await and limit the results to 4
export const getMovieQuery = async (query: string) => {
  const res = await fetch(
    `${TMBD_QUERY}?api_key=${TMBD_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = await res.json();
  return data.results.slice(0, 4);
};
