import "./../css/authors.css";

import Loading from "./Loading";
import ListElement from "./ListElement";
import { AuthorAndTags } from "../interfaces/AuthorAndTagsPropsInterface";
import useQuote from "../hooks/useQuote";

export default function ListBlock({
  endpoint,
  type,
}: {
  endpoint: string;
  type: "writers" | "tags";
}) {
  const { isLoading, error, list: listAuthorAndTags } = useQuote(endpoint);
  const groups: { [key: string]: AuthorAndTags[] } = listAuthorAndTags.reduce(
    (
      acc: { [key: string]: (typeof listAuthorAndTags)[] },
      listAuthorAndTags
    ) => {
      const firstUppercaseChar: string =
        listAuthorAndTags.name[0].toUpperCase();

      if (!acc[firstUppercaseChar]) {
        acc[firstUppercaseChar] = [];
      }

      acc[firstUppercaseChar].push(listAuthorAndTags);
      return acc;
    },
    {}
  );
  return (
    <div className="categories">
      {isLoading && <Loading />}
      {error && <p className="loading">{error}</p>}
      {!isLoading &&
        !error &&
        Object.entries(groups).map(([groupKey, group]) => (
          <ListElement
            key={groupKey}
            group={group}
            groupKey={groupKey}
            type={type}
          />
        ))}
      {!isLoading && Object.keys(groups).length === 0 && (
        <div className="loading">"Данных нет"</div>
      )}
    </div>
  );
}
