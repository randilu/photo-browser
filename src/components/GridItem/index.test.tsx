import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridItem from "./index";

describe("GridItem", () => {
  const mockRef = jest.fn(() => ({
    current: null,
  }));

  it("should render photo thumbnail", () => {
    const mockPhoto = {
      id: 1,
      title: "test",
      url: "test",
      albumId: 1,
      thumbnailUrl: "test",
    };

    render(<GridItem photo={mockPhoto} ref={mockRef} />);

    const photoImage = screen.getByRole("img");

    expect(photoImage).toBeInTheDocument();
    expect(photoImage).toHaveAttribute("src", mockPhoto.thumbnailUrl);
    expect(photoImage).toHaveAttribute("alt", mockPhoto.title);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `#/photos/${mockPhoto.id}`
    );
  });
});
