export interface QuoteInterface {
  _id: string;
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: Date;
  dateModified: Date;
  length: number;
  tags: string[];
  isLiked: boolean;
}
