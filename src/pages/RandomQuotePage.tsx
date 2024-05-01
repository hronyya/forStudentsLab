import { Suspense, lazy } from "react";
import Header from "../components/header";
import Loading from "../components/Loading";

const RandomQuote = lazy(() => import("../components/randomQuote"));

export default function RandomQuotePage() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <RandomQuote />
      </Suspense>
    </>
  );
}
