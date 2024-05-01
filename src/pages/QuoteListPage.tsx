import { Suspense, lazy } from "react";
import Header from "../components/header";
import Loading from "../components/Loading";
import { QuotePageProps } from "../interfaces/QuotePagePropsInterface";

const QuoteList = lazy(() => import("../components/QuoteList"));

export default function QuoteListPage({
  quotes,
  setQuotes,
  likesList,
  onClickLike,
  endpoint,
}: { endpoint: string } & QuotePageProps) {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loading />}>
        <QuoteList
          quotes={quotes}
          setQuotes={setQuotes}
          endpoint={endpoint}
          likesList={likesList}
          onClickLike={onClickLike}
        />
      </Suspense>
    </div>
  );
}
