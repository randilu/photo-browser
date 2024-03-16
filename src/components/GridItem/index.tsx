import React from "react";
import { Photo } from "../../types";
import "./styles.css";

const GridItem = React.forwardRef<HTMLDivElement, { photo: Photo }>(
  ({ photo }, ref) => {
    const { id, thumbnailUrl, title } = photo;
    return (
      <div className="grid-item" ref={ref}>
        <a href={`#/photos/${id}`}>
          <img src={thumbnailUrl} alt={title} />
        </a>
      </div>
    );
  }
);

export default GridItem;
