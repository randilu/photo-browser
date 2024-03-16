import { useParams } from "react-router-dom";
import { Photo } from "../../types";
import useFetch from "../../hooks/useFetch";
import Error from "../Error";
import Loader from "../Loader";
import "./styles.css";

const PhotoView = () => {
  const { photoId } = useParams();

  const {
    data: photo,
    isLoading,
    error,
  } = useFetch<Photo>(`https://jsonplaceholder.typicode.com/photos/${photoId}`);

  if (error) {
    return <Error />;
  }

  if (isLoading || !photo) {
    return <Loader />;
  }

  const { albumId, url, title } = photo;

  return (
    <div className="photo-view-container">
      <div className="photo-view">
        <img className="photo" src={url} alt={title} />
        <div className="photo-content">
          <p className="photo-label">Title: {title}</p>
          <p className="photo-label">Album ID: {albumId}</p>
        </div>
        <div className="button">
          <a href={`#/albums/${albumId}`}>Browse Album</a>
        </div>
      </div>
    </div>
  );
};

export default PhotoView;
