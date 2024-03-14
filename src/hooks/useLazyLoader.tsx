import { useCallback, useEffect, useRef, useState } from "react";
import { PAGE_SIZE } from "../constants";

export default function useLazyLoader({
  pageSize = PAGE_SIZE,
  fetchUrl,
}: {
  pageSize: number;
  fetchUrl: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
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

    async function fetchItems() {
      setIsLoading(true);
      let response;
      const start = currentPage * pageSize;
      try {
        response = await fetch(
          `${fetchUrl}?_start=${start}&_limit=${pageSize}`
        );
      } catch (error) {
        console.error("Error fetching items", error);
        setIsLoading(false);
        return;
      }
      const newItems = (await response.json()) as [];
      if (mounted) {
        setItems((items) => [...items, ...newItems]);
      }

      setHasNextPage(newItems.length > 0);
      setIsLoading(false);
    }

    fetchItems();

    return () => {
      mounted = false;
    };
  }, [currentPage, pageSize, fetchUrl]);

  return { items, lastElementRef, isLoading };
}
