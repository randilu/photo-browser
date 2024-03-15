import { renderHook, waitFor } from "@testing-library/react";
import useLazyLoader from "./useLazyLoader";
import { Photo } from "../types";

describe("useLazyLoader", () => {
  const mockPhotos = [
    {
      albumId: 1,
      id: 1,
      title: "test title",
      url: "https://testUrl",
      thumbnailUrl: "https://testThumbnailUrl",
    },
  ];
  beforeEach(() => {
    const mockResponse = new Response(JSON.stringify(mockPhotos));
    jest.spyOn(global, "fetch").mockResolvedValue(mockResponse);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return lazy loaded data", async () => {
    const mockPhotos = [
      {
        albumId: 1,
        id: 1,
        title: "test title",
        url: "https://testUrl",
        thumbnailUrl: "https://testThumbnailUrl",
      },
    ];

    const { result } = renderHook(() =>
      useLazyLoader<Photo>({ pageSize: 10, fetchUrl: "https://fetchUrl" })
    );

    await waitFor(() => {
      expect(result.current.items).toEqual(mockPhotos);
    });
  });

  it("should return loading state as true while fetching data", async () => {
    const { result } = renderHook(() =>
      useLazyLoader<Photo>({ pageSize: 10, fetchUrl: "https://fetchUrl" })
    );

    expect(result.current.isLoading).toEqual(true);
  });
});
