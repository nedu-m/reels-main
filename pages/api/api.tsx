//Set the TMBD Popular Movies API
const { TMBD_API_KEY, TMBD_POPULAR_URL, TMBD_TRENDING_URL } = process.env;

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
