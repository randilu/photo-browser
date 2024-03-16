import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";
import { Photo } from "../types";

describe("useFetch", () => {
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

  it("should return fetched data", async () => {
    const { result } = renderHook(() => useFetch<Photo>("https://fetchUrl"));

    await waitFor(() => {
      expect(result.current.data).toEqual(mockPhotos);
    });
    await waitFor(() => {
      expect(result.current.error).toEqual(null);
    });
    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
  });

  it("should return error if fetching fails", async () => {
    jest
      .spyOn(global, "fetch")
      .mockRejectedValue(new Error("Error fetching data"));

    const { result } = renderHook(() => useFetch<Photo>("https://fetchUrl"));

    await waitFor(() => {
      expect(result.current.data).toEqual(null);
    });
    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
    await waitFor(() => {
      expect(result.current.error).toEqual(new Error("Error fetching data"));
    });
  });

  test("should return loading state as true while fetching data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return new Promise((resolve) => {
        resolve(new Response(JSON.stringify(mockPhotos)));
      });
    });

    const { result } = renderHook(() => useFetch<Photo>("https://fetchUrl"));

    await waitFor(() => expect(result.current.isLoading).toEqual(true));
  });
});
