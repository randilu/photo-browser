import { render, screen, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoView from "./index";

describe("PhotoView", () => {
  const mockPhotoResponse = {
    albumId: 1,
    id: 1,
    title: "test title",
    url: "https://testUrl",
    thumbnailUrl: "https://testThumbnailUrl",
  };

  beforeEach(() => {
    const mockResponse = new Response(JSON.stringify(mockPhotoResponse));
    jest.spyOn(global, "fetch").mockResolvedValue(mockResponse);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render Loader when loading", async () => {
    render(<PhotoView />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render photo", async () => {
    const mockData = {
      albumId: 1,
      id: 1,
      title: "test title",
      url: "https://testUrl",
      thumbnailUrl: "https://testThumbnailUrl",
    };

    await act(async () => {
      render(<PhotoView />);
    });

    const photoElement = screen.getByRole("img");

    expect(photoElement).toBeInTheDocument();
    expect(photoElement).toHaveAttribute("src", mockData.url);
    expect(photoElement).toHaveAttribute("alt", mockData.title);

    expect(screen.getByText("Title: test title")).toBeInTheDocument();
    expect(screen.getByText("Album ID: 1")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "#/albums/1");
  });
});
