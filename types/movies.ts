export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export type topRatedProps = {
  topRatedMovies: {
    id: number;
    title: string;
    poster_path: string;
  }[];
};

export type trendingProps = {
  trendingMovies: {
    id: number;
    title: string;
    poster_path: string;
  }[];
};
