import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GalleryView from "./index";

describe("GalleryView", () => {
  it("renders the gallery title", () => {
    render(<GalleryView />);

    expect(screen.getByText("All Photos")).toBeInTheDocument();
  });
});
