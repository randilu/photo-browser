import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index";

describe("Header", () => {
  it("should render header label", () => {
    render(<Header title={"Test Title"} />);

    expect(screen.getByText(/Photo Browser/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  });
});
