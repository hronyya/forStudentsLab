import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
import Header from "../components/header";

const ListBlock = lazy(() => import("../components/ListBlock"));

export default function TagsPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <ListBlock endpoint={"tags"} type="tags" />
      </Suspense>
    </>
  );
}
