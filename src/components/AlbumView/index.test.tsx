import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AlbumView from "./index";

jest.mock("react-router-dom", () => ({
  useParams: () => ({ albumId: 1 }),
}));

describe("AlbumView", () => {
  it("renders the album title", () => {
    render(<AlbumView />);

    expect(screen.getByText("Album 1")).toBeInTheDocument();
  });
});
