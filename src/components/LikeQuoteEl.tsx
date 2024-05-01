import { QuoteInterface } from "../interfaces/QuoteInterface";

export default function LikeQuoteEl({
  likeElement,
  onDeleteLike,
}: {
  likeElement: QuoteInterface;
  onDeleteLike(likeEl: QuoteInterface): void;
}) {
  return (
    <div className="quote-item">
      <div>Author: {likeElement.author}</div>
      <blockquote>
        <em>"{likeElement.content}"</em>
      </blockquote>
      <button className="btn-delete" onClick={() => onDeleteLike(likeElement)}>
        ❌
      </button>
    </div>
  );
}
