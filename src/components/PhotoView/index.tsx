import React from "react";
import { useParams } from "react-router-dom";
import { Photo } from "../../types";
import useFetch from "../../hooks/useFetch";
import Error from "../Error";
import Loader from "../Loader";
import Header from "../Header";
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
    <React.Fragment>
      <Header title={`Photo ${photoId}`} />
      <div className="photo-view-container">
        <div className="photo-view">
          <div className="img-wrapper">
            <img className="photo" src={url} alt={title} />
          </div>
          <div className="photo-content">
            <p className="photo-label">
              <b>Album ID:</b> {albumId}
            </p>
            <p className="photo-label">
              <b>Title:</b> {title}
            </p>
          </div>
          <div className="button">
            <a href={`#/albums/${albumId}`}>Browse Album</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhotoView;
