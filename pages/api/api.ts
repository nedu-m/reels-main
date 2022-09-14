//Set the TMBD API
const { NEXT_PUBLIC_TMBD_API_KEY, TMBD_POPULAR_URL, TMBD_TRENDING_URL } =
  process.env;

const QUERY_API = process.env.NEXT_PUBLIC_QUERY_API;

//Get Populars movies from TMDB API using async/await
export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${TMBD_POPULAR_URL}?api_key=${NEXT_PUBLIC_TMBD_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results;
};

//Get Trending movies from TMDB API using async/await
export const getTrendingMovies = async () => {
  const res = await fetch(
    `${TMBD_TRENDING_URL}?api_key=${NEXT_PUBLIC_TMBD_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results;
};

// //Make a Movie Query from TMDB API using async/await and limit the results to 4
// export const getMovieQuery = async (query: string) => {
//   const res = await fetch(`${QUERY_API}&${query}&page=1&include_adult=false`);
//   const data = await res.json();
//   return data.results.slice(0, 4);
// };
