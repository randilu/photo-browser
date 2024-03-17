import { useCallback, useEffect, useRef, useState } from "react";
import { PAGE_SIZE } from "../constants";

export default function useLazyLoader<T>({
  pageSize = PAGE_SIZE,
  fetchUrl,
  placeholder,
}: {
  pageSize: number;
  fetchUrl: string;
  placeholder?: T;
}) {
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const observer = useRef<IntersectionObserver>();

  const intersectionObserverRef = useCallback(
    (elm: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (hasNextPage && entries[0].isIntersecting) {
          setCurrentPage((previousPage) => previousPage + 1);
        }
      });

      if (elm) observer.current.observe(elm);
      return observer;
    },
    [isLoading, hasNextPage]
  );

  const getPlaceholderItems = useCallback(
    () =>
      Array.from({ length: pageSize }).map(
        (_, index) =>
          ({
            ...placeholder,
            id: items?.length + index + 1,
          } as T)
      ),
    [pageSize, placeholder, items]
  );

  useEffect(() => {
    let mounted = true;

    async function fetchItems() {
      setIsLoading(true);
      try {
        const start = currentPage * pageSize;
        const response = await fetch(
          `${fetchUrl}?_start=${start}&_limit=${pageSize}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const newItems = await response.json();
        if (mounted) {
          setItems((items) => [...items, ...newItems]);
          setHasNextPage(newItems.length > 0);
        }
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("Error fetching data")
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();

    return () => {
      mounted = false;
    };
  }, [currentPage, pageSize, fetchUrl]);

  useEffect(() => {
    console.log("ue2 invoked");
    console.log({
      error,
      getPlaceholderItems,
    });
    if (error) {
      const placeholderItems = getPlaceholderItems();
      setItems((items) => [...items, ...placeholderItems]);
      setError(null);
    }
  }, [error, getPlaceholderItems]);

  return { items, isLoading, error, intersectionObserverRef };
}
