import "./styles.css";
import { Photo } from "../../types";

const PhotoView = ({ id, title, url, albumId }: Photo) => {
  return (
    <div className="photo-view-container">
      <div className="photo-view">
        <img className="photo" src={url} alt={title} />
        <div className="photo-content">
          <p className="photo-label">Title: {title}</p>
          <p className="photo-label">Album ID: {albumId}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoView;
