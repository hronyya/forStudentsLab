import { QuoteInterface } from "./QuoteInterface";

export interface QuoteProps {
  key: string;
  quote: QuoteInterface;
  number: number;
  onClickLike(likeElement: QuoteInterface): void;
}
