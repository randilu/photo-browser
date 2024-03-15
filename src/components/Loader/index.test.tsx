import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./index";

describe("Loader", () => {
  it("should render loader", () => {
    render(<Loader />);

    const loaderElement = screen.getByTestId("loader");

    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass("loader");
  });
});
