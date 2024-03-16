import React from "react";
import { API_BASE_URL } from "../../constants";
import PhotoGrid from "../PhotoGrid";
import Header from "../Header";
import "./styles.css";

const GalleryView = () => {
  return (
    <React.Fragment>
      <Header title={`All Photos`} />
      <div className="gallery-container">
        <PhotoGrid fetchUrl={`${API_BASE_URL}/photos`} />
      </div>
    </React.Fragment>
  );
};

export default GalleryView;
