import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "./index";

describe("NotFound", () => {
  it("should render header label", () => {
    render(<NotFound />);

    expect(screen.getByText("404: Oops! The page you are looking for is not found.")).toBeInTheDocument();
  });
});
