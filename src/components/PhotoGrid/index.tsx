import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import GridItem from "../GridItem";
import { Photo } from "../../types";
import Loader from "../Loader";

const PhotoGrid = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const pageSize = 20;

  const observer = useRef<IntersectionObserver>();

  const lastPhotoElmRef = useCallback(
    (elm: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (hasNextPage && entries[0].isIntersecting) {
          setCurrentPage((previousPage) => previousPage + 1);
        }
      });

      if (elm) observer.current.observe(elm);
    },
    [isLoading, hasNextPage]
  );

  useEffect(() => {
    let mounted = true;

    async function fetchPhotos() {
      setIsLoading(true);
      let response;
      try {
        response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_start=${currentPage}&_limit=${pageSize}`
        );
      } catch (error) {
        console.error("Error fetching photos", error);
        setIsLoading(false);
        return;
      }
      const newPhotos = (await response.json()) as [];
      if (mounted) {
        setPhotos((photos) => [...photos, ...newPhotos]);
      }

      setHasNextPage(newPhotos.length > 0);
      setIsLoading(false);
    }

    fetchPhotos();

    return () => {
      mounted = false;
    };
  }, [currentPage]);

  if (isLoading && !photos.length) {
    return <Loader />;
  }

  const photoList = photos.map(
    (photo: { id: string; thumbnailUrl: string }, index: number) => {
      if (photos.length === index + 1) {
        return (
          <GridItem
            key={index}
            id={photo.id}
            thumbnailUrl={photo.thumbnailUrl}
            reference={lastPhotoElmRef}
          />
        );
      }
      return (
        <GridItem key={index} id={photo.id} thumbnailUrl={photo.thumbnailUrl} />
      );
    }
  );

  return (
    <div className="container">
      <div className="grid-container">{photoList}</div>
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default PhotoGrid;
