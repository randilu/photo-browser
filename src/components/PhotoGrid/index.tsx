import { Photo } from "../../types";
import useLazyLoader from "../../hooks/useLazyLoader";
import { PAGE_SIZE } from "../../constants";
import GridItem from "../GridItem";
import Loader from "../Loader";
import Error from "../Error";
import "./styles.css";

const PhotoGrid = ({ fetchUrl }: { fetchUrl: string }) => {
  const {
    isLoading,
    items: photos,
    error,
    intersectionObserverRef,
  } = useLazyLoader<Photo>({
    pageSize: PAGE_SIZE,
    fetchUrl,
  });

  if (error) {
    return <Error />;
  }

  if (photos.length === 0) {
    return <Loader />;
  }

  const photoList = photos.map((photo: Photo, index: number) => {
    // attaching the intersectionObserverRef to the last photo
    if (photos.length === index + 1) {
      return (
        <GridItem key={photo.id} photo={photo} ref={intersectionObserverRef} />
      );
    }
    return <GridItem key={index} photo={photo} />;
  });

  return (
    <div className="container">
      <div className="grid-container">{photoList}</div>
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default PhotoGrid;
