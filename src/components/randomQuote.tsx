import { useEffect, useState } from "react";
import { QuoteInterface } from "../interfaces/QuoteInterface";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import formatLink from "../utilities/formatLink";

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState<QuoteInterface>();
  const [isLoading, setIsLoading] = useState(false);

  const getRandomQuote = async (signal: AbortSignal) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api.quotable.io/random`, { signal });
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      const data = await res.json();
      setRandomQuote(data);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        console.log("Request was aborted");
      } else {
        console.error(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getRandomQuote(controller.signal);
    return () => controller.abort();
  }, []);

  const handleGetRandomQuote = () => {
    getRandomQuote(new AbortController().signal);
  };

  return (
    <div className="soloQuote">
      {isLoading && <Loading />}{" "}
      {!isLoading && (
        <>
          <blockquote>{randomQuote?.content || <Loading />}</blockquote>
          <div className="block">
            <div className="mini-block">
              <p className="author">{randomQuote?.author}</p>
              <div className="tags">
                {Array.from(new Set(randomQuote?.tags)).map((tag) => (
                  <Link className="tag" to={formatLink(tag)} key={`${tag}`}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <button onClick={handleGetRandomQuote} disabled={isLoading}>
              Обновить
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RandomQuote;
