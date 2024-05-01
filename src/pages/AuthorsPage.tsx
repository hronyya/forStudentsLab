import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
import Header from "../components/header";

const ListBlock = lazy(() => import("../components/ListBlock"));

export default function AuthorsPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <ListBlock endpoint={"authors?sortBy=name&limit=150"} type="writers" />
      </Suspense>
    </>
  );
}
