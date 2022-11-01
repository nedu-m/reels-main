import { useRouter } from "next/router";
export default function MovieDetails() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
}
