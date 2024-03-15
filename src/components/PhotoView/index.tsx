import "./styles.css";
import { Photo } from "../../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

const PhotoView = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPhoto() {
      setIsLoading(true);
      let response;
      try {
        response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${photoId}`
        );
      } catch (error) {
        console.error("Error fetching photos", error);
        setIsLoading(false);
        return;
      }
      const photo = (await response.json()) as Photo;
      setPhoto(photo);

      setIsLoading(false);
    }

    fetchPhoto();
  }, [photoId]);

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
          <p className="photo-label">
            {" "}
            <a href={`#/albums/${albumId}`}>Browse full album</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoView;
