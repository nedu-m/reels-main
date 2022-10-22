import Home from "@pages/index";
import { render } from "@testing-library/react";

describe("Home page", () => {
  it("should render without crashing", () => {
    render(<Home />);
  });
});
