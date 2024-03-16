import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "./index";

describe("Error", () => {
  it("should render error label", () => {
    render(<Error />);

    expect(
      screen.getByText("Something went wrong. Please refresh the page and try again.")
    ).toBeInTheDocument();
  });
});
