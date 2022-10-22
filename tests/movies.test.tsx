import Movies from "@pages/movies";
import { render } from "@testing-library/react";

describe("Movies page", () => {
  it("should render without crashing", () => {
    render(<Movies topRatedMovies={[]} trendingMovies={[]} />);
  });
});
