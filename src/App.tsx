import { useEffect, useState } from "react";

import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteInterface } from "./interfaces/QuoteInterface";
import { links } from "./const";
import LikePage from "./pages/LikePage";
import QuoteListPage from "./pages/QuoteListPage";
import AuthorsPage from "./pages/AuthorsPage";
import TagsPage from "./pages/TagsPage";
import RandomQuotePage from "./pages/RandomQuotePage";

export default function App() {
  const [quotes, setQuotes] = useState<QuoteInterface[]>([]);
  const initialLikedList: QuoteInterface[] = (() => {
    const likes = localStorage.getItem("likes");
    return likes ? JSON.parse(likes) : [];
  })();
  const [likesList, setLikesList] =
    useState<QuoteInterface[]>(initialLikedList);

  function handleLikeClick(currentQuote: QuoteInterface) {
    const selectedQuote = quotes.find(
      (element) => element._id === currentQuote._id
    );
    if (selectedQuote) {
      selectedQuote.isLiked = !selectedQuote.isLiked;
      if (selectedQuote.isLiked) {
        setLikesList([...likesList, currentQuote]);
      } else {
        handleDeleteLike(currentQuote);
      }
    }
  }

  function handleDeleteLike(currentQuote: QuoteInterface) {
    setLikesList(likesList.filter((like) => like._id !== currentQuote._id));
  }

  useEffect(
    function setItemsToLocalStorage() {
      localStorage.setItem("likes", JSON.stringify(likesList));
    },
    [likesList]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <QuoteListPage
              quotes={quotes}
              setQuotes={setQuotes}
              endpoint={`quotes/random?limit=${150}`}
              likesList={likesList}
              onClickLike={handleLikeClick}
            />
          }
        />
        <Route path={links.writers.href} element={<AuthorsPage />} />
        <Route path={links.tags.href} element={<TagsPage />} />
        <Route path={links.randomQuote.href} element={<RandomQuotePage />} />
        <Route
          path={links.likedList.href}
          element={
            <LikePage likesList={likesList} onDeleteLike={handleDeleteLike} />
          }
        />
        <Route
          path={`tags/:tag`}
          element={
            <QuoteListPage
              quotes={quotes}
              setQuotes={setQuotes}
              endpoint="quotes?tags="
              likesList={likesList}
              onClickLike={handleLikeClick}
            />
          }
        />
        <Route
          path={`writers/:tag`}
          element={
            <QuoteListPage
              quotes={quotes}
              setQuotes={setQuotes}
              endpoint="quotes?author="
              likesList={likesList}
              onClickLike={handleLikeClick}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
