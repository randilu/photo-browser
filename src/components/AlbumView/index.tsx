import "./styles.css";
import { useParams } from "react-router-dom";
import PhotoGrid from "../PhotoGrid";

const AlbumView = () => {
  const { albumId } = useParams();

  return (
    <div className="album-container">
      <p className="album-view-label">{`Album Id: ${albumId}`}</p>
      <PhotoGrid
        fetchUrl={`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`}
      />
    </div>
  );
};

export default AlbumView;
