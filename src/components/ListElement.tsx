import { Link } from "react-router-dom";
import { AuthorAndTags } from "../interfaces/AuthorAndTagsPropsInterface";

export default function ListElement({
  group,
  groupKey,
  type,
}: {
  group: AuthorAndTags[];
  groupKey: string;
  type: "writers" | "tags";
}) {
  return (
    <div className="category">
      <p>{groupKey}</p>
      <ul className="writer">
        {group.map((authorOrTag) => (
          <li className="writer--name" key={authorOrTag._id}>
            <Link
              to={`/${type}/${authorOrTag.name
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {authorOrTag.name} ({authorOrTag.quoteCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
