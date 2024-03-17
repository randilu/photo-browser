import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  const renderWithRouter = (
    ui: JSX.Element,
    { route = "/" }: { route?: string } = {}
  ) => {
    window.location.hash = route;

    return {
      user: userEvent.setup(),
      ...render(ui, { wrapper: HashRouter }),
    };
  };

  afterEach(() => {
    window.location.hash = "";
  });

  it("should navigate to Gallery view as default landing page", async () => {
    renderWithRouter(<App />, { route: "/" });

    expect(screen.getByText(/All Photos/i)).toBeInTheDocument();
  });

  it("should navigate to NotFound view for not defined routes", () => {
    renderWithRouter(<App />, { route: "/some/bad/route" });

    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("should navigate to PhotoView page", async () => {
    renderWithRouter(<App />, { route: "#/photos/2" });

    await waitFor(() => {
      expect(screen.getByText(/Photo/i)).toBeInTheDocument();
    });
  });

  it("should navigate to AlbumView page", async () => {
    renderWithRouter(<App />, { route: "#/albums/2" });

    await waitFor(() => {
      expect(screen.getByText(/Album/i)).toBeInTheDocument();
    });
  });

  it("should navigate back to Gallery page when brand icon is clicked", async () => {
    const { user } = renderWithRouter(<App />, { route: "/some/bad/route" });

    expect(screen.getByText("Not Found")).toBeInTheDocument();

    // this verifies page content of Gallery view after navigating
    await user.click(screen.getByRole("img"));

    expect(screen.getByText(/All Photos/i)).toBeInTheDocument();
  });
});
