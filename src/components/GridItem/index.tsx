import React from "react";
import { Photo } from "../../types";
import "./styles.css";

const GridItem = ({ photo, reference }: { photo: Photo; reference?: any }) => {
  const { id, thumbnailUrl, title } = photo;
  return (
    <div className="grid-item" ref={reference}>
      <a href={`#/photos/${id}`}>
        <img src={thumbnailUrl} alt={title} />
      </a>
    </div>
  );
};

export default GridItem;
