import { useRouter } from "next/router";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

export default function Index() {
  const router = useRouter();
  const { title, poster, overview, vote_average, release_date } = router.query;

  //router back
  const goBack = () => {
    router.back();
  };

  return (
    <MovieDetails
      title={title}
      poster={poster}
      overview={overview}
      vote_average={vote_average}
      release_date={release_date}
      goBack={goBack}
    />
  );
}
