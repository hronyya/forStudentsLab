import { Tag } from "./TagPropsInterface";
import { QuoteInterface } from "./QuoteInterface";

export interface AuthorAndTags extends Tag {
  bio: string;
  description: string;
  link: string;
  slug: string;
  quoteCount: string;
  results?: Array<QuoteInterface> | Array<AuthorAndTags>;
}
