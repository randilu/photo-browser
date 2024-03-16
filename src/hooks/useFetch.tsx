import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      setIsLoading(true);
      let response;
      try {
        response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        if (mounted) {
          setData(result);
        }
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("Error fetching data")
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
}
