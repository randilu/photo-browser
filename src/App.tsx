import { Routes, Route } from "react-router-dom";
import AlbumView from "./components/AlbumView";
import PhotoView from "./components/PhotoView";
import NotFound from "./components/NotFound";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryView />} />
      <Route path="photos">
        <Route path=":photoId" element={<PhotoView />} />
      </Route>
      <Route path="albums">
        <Route path=":albumId" element={<AlbumView />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
