import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoView from "./index";
import useFetch from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");

const mockedUseFetch = jest.mocked(useFetch);

describe("PhotoView", () => {
  const mockPhoto = {
    albumId: 1,
    id: 1,
    title: "test title",
    url: "https://testUrl",
    thumbnailUrl: "https://testThumbnailUrl",
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render Loader when loading", async () => {
    mockedUseFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    render(<PhotoView />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render photo", async () => {
    mockedUseFetch.mockReturnValue({
      data: mockPhoto,
      isLoading: false,
      error: null,
    });
    render(<PhotoView />);

    const photoElement = screen.getByAltText("test title");

    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute("src", "https://testUrl");
    expect(photoElement).toHaveAttribute("alt", "test title");

    expect(screen.getByText(/test title/)).toBeInTheDocument();
    expect(screen.getByText(/Album ID/)).toBeInTheDocument();
  });
});
