import "./styles.css";
import GridItem from "../GridItem";
import { Photo } from "../../types";
import Loader from "../Loader";
import useLazyLoader from "../../hooks/useLazyLoader";
import { PAGE_SIZE } from "../../constants";

const PhotoGrid = ({ fetchUrl }: { fetchUrl: string }) => {
  const {
    isLoading,
    items: photos,
    lastElementRef,
  } = useLazyLoader<Photo>({
    pageSize: PAGE_SIZE,
    fetchUrl,
  });

  if (photos.length === 0) {
    return <Loader />;
  }

  const photoList = photos.map((photo: Photo, index: number) => {
    if (photos.length === index + 1) {
      return (
        <GridItem key={photo.id} photo={photo} reference={lastElementRef} />
      );
    }
    return <GridItem key={index} photo={photo as Photo} />;
  });

  return (
    <div className="container">
      <div className="grid-container">{photoList}</div>
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default PhotoGrid;
