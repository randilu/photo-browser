import React from "react";
import { useParams } from "react-router-dom";
import PhotoGrid from "../PhotoGrid";
import Header from "../Header";
import "./styles.css";

const AlbumView = () => {
  const { albumId } = useParams();

  return (
    <React.Fragment>
      <Header title={`Album ${albumId}`} />
      <div className="album-container">
        <PhotoGrid
          fetchUrl={`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`}
        />
      </div>
    </React.Fragment>
  );
};

export default AlbumView;
