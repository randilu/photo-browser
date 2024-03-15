import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import useLazyLoader from "../../hooks/useLazyLoader";
import PhotoGrid from "./index";

jest.mock("../../hooks/useLazyLoader");

const mockedUseLazyLoader = jest.mocked(useLazyLoader);

describe("PhotoGrid", () => {
  it("should render Loader when photos are empty on initial load", () => {
    mockedUseLazyLoader.mockReturnValue({
      items: [],
      isLoading: false,
      lastElementRef: jest.fn(),
    });

    render(<PhotoGrid fetchUrl="https://testUrl" />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("should render photo grid", () => {
    mockedUseLazyLoader.mockReturnValue({
      items: [
        {
          id: 1,
          title: "thumbnail 1",
          url: "https://testPhoto/1",
          albumId: 1,
          thumbnailUrl: "https://testThumbnail/1",
        },
        {
          id: 2,
          title: "thumbnail 2",
          url: "https://testPhoto/2",
          albumId: 1,
          thumbnailUrl: "https://testThumbnail/2",
        },
      ] as Array<{
        id: number;
        title: string;
        url: string;
        albumId: number;
        thumbnailUrl: string;
      }>,
      isLoading: false,
      lastElementRef: jest.fn(),
    });

    render(<PhotoGrid fetchUrl="https://testUrl" />);

    const photoImages = screen.getAllByRole("img");
    const photoLinks = screen.getAllByRole("link");

    expect(photoImages).toHaveLength(2);
    expect(photoLinks).toHaveLength(2);

    expect(photoImages[0]).toHaveAttribute("src", "https://testThumbnail/1");
    expect(photoImages[0]).toHaveAttribute("alt", "thumbnail 1");
    expect(photoLinks[0]).toHaveAttribute("href", "/photos/1");

    expect(photoImages[1]).toHaveAttribute("src", "https://testThumbnail/2");
    expect(photoImages[1]).toHaveAttribute("alt", "thumbnail 2");
    expect(photoLinks[1]).toHaveAttribute("href", "/photos/2");
  });

  it("should render loading text when loading", () => {
    mockedUseLazyLoader.mockReturnValue({
      items: [
        {
          id: 1,
          title: "thumbnail 1",
          url: "https://testPhoto/1",
          albumId: 1,
          thumbnailUrl: "https://testThumbnail/1",
        },
      ],
      isLoading: true,
      lastElementRef: jest.fn(),
    });

    render(<PhotoGrid fetchUrl="https://testUrl" />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
