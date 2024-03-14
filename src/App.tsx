import { BrowserRouter, Routes, Route } from "react-router-dom";
import { API_BASE_URL } from "./constants";
import AlbumView from "./components/AlbumView";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import PhotoView from "./components/PhotoView";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PhotoGrid fetchUrl={`${API_BASE_URL}/photos`} />}
          />
          <Route path="photos">
            <Route path=":photoId" element={<PhotoView />} />
          </Route>
          <Route path="albums">
            <Route path=":albumId" element={<AlbumView />} />
          </Route>
          <Route
            path="*"
            element={<h1>404: Oops! The page you are looking is not found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
