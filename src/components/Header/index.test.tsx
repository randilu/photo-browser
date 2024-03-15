import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index";

describe("Header", () => {
  it("should render header label", () => {
    render(<Header />);

    expect(screen.getByText(/Photo Browser/i)).toBeInTheDocument();
  });
});
