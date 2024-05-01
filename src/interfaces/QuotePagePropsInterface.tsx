import { QuoteInterface } from "./QuoteInterface";

export interface QuotePageProps {
  quotes: QuoteInterface[];
  likesList: QuoteInterface[];
  setQuotes: (quotes: QuoteInterface[]) => void;
  onClickLike(likeElement: QuoteInterface): void;
}
