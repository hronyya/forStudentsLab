import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { QuotePageProps } from "../interfaces/QuotePagePropsInterface";
import Quote from "./QuoteElement";
import useQuotes from "../hooks/useQuote";
import { useEffect } from "react";

export default function QuoteList({
  endpoint,
  setQuotes,
  onClickLike,
}: { endpoint: string } & QuotePageProps) {
  const lastLocation = useLocation().pathname.split("/")[2];
  const {
    isLoading,
    error,
    list: quotes,
  } = useQuotes(
    `${endpoint}${lastLocation ? `${lastLocation}&limit=150` : ""}`
  );

  useEffect(() => {
    setQuotes(quotes);
  }, [quotes, setQuotes]);

  return (
    <ul className="quote">
      {isLoading && <Loading />}
      {error && <p className="loading">{error}</p>}
      {!isLoading &&
        !error &&
        quotes.length &&
        quotes?.map((quote, i) => (
          <Quote
            key={quote._id}
            quote={quote}
            number={i + 1}
            onClickLike={onClickLike}
          />
        ))}
      {!isLoading && quotes.length === 0 && (
        <div className="loading">"Цитат нет"</div>
      )}
    </ul>
  );
}
