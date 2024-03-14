import { Photo } from "../../types";
import "./styles.css";

const GridItem = ({ photo, reference }: { photo: Photo; reference?: any }) => {
  const { id, thumbnailUrl, title } = photo;
  return (
    <a className="grid-item" ref={reference} href={`/photos/${id}`}>
      <img src={thumbnailUrl} alt={title} />
    </a>
  );
};

export default GridItem;
