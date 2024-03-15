import { Routes, Route, HashRouter } from "react-router-dom";
import { API_BASE_URL } from "./constants";
import AlbumView from "./components/AlbumView";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import PhotoView from "./components/PhotoView";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Header />
      <HashRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
