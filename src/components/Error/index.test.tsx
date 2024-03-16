import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "./index";

describe("Error", () => {
  it("should render error label", () => {
    render(<Error />);

    expect(
      screen.getByText("Unexpected error occurred. Please try again later.")
    ).toBeInTheDocument();
  });
});
