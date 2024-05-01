import { Link } from "react-router-dom";
import { QuoteProps } from "../interfaces/QuoteBlockProps";
import formatLink from "../utilities/formatLink";

export default function Quote({ quote, number, onClickLike }: QuoteProps) {
  return (
    <div className="quote-item" key={quote._id}>
      <div className="main-descr">
        <div className="author-block">
          <span className="quote-num">{number}</span>
          <div>Author: {quote.author}</div>
        </div>
        <div className="tags-block">
          <div className="tags">
            {Array.from(new Set(quote?.tags)).map((tag) => (
              <Link className="tag" to={formatLink(tag)} key={`${tag}`}>
                {tag}
              </Link>
            ))}
          </div>
          <button
            onClick={() => {
              onClickLike(quote);
            }}
          >
            {quote.isLiked ? "🩷" : "🖤"}
          </button>
        </div>
      </div>
      <blockquote>
        <em>"{quote.content}"</em>
      </blockquote>
    </div>
  );
}
