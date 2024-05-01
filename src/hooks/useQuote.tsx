import { useEffect, useState } from "react";
import { QuoteInterface } from "../interfaces/QuoteInterface";
import { AuthorAndTags } from "../interfaces/AuthorAndTagsPropsInterface";

interface ApiResponseData {
  results?: Array<QuoteInterface> | Array<AuthorAndTags>;
}

export default function useQuotes(endpoint: string): {
  isLoading: boolean;
  list: Array<QuoteInterface & AuthorAndTags>;
  error: string | null;
} {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<Array<QuoteInterface & AuthorAndTags>>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = async function (endpoint: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api.quotable.io/${endpoint}`);
      const data: ApiResponseData = await res.json();
      if (data.results) {
        setList(data.results as Array<QuoteInterface & AuthorAndTags>);
      } else {
        setList(data as Array<QuoteInterface & AuthorAndTags>);
      }
      setError(null);
    } catch (err) {
      setError("An error occurred while fetching quotes.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes(endpoint);
  }, [endpoint]);

  return { isLoading, list, error };
}
