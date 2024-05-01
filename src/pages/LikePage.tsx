import Header from "../components/header";
import { QuoteInterface } from "../interfaces/QuoteInterface";
import Loading from "../components/Loading";
import { Suspense, lazy } from "react";

const LikeQuoteEl = lazy(() => import("../components/LikeQuoteEl"));

export default function LikePage({
  likesList,
  onDeleteLike,
}: {
  likesList: QuoteInterface[];
  onDeleteLike(quote: QuoteInterface): void;
}) {
  return (
    <div className="App">
      <Header />
      <h2 className="title">Понравившиеся цитаты</h2>
      <div className="quote">
        {likesList.length !== 0 ? (
          likesList.map((quote) => (
            <Suspense key={quote._id} fallback={<Loading />}>
              <LikeQuoteEl likeElement={quote} onDeleteLike={onDeleteLike} />
            </Suspense>
          ))
        ) : (
          <div className="loading">"Цитат нет"</div>
        )}
      </div>
    </div>
  );
}
