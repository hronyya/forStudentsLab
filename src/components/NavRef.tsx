import { Link } from "react-router-dom";

export default function NavRef({ link, title }: { [key: string]: string }) {
  return (
    <Link className="nav--link" to={link}>
      {title}
    </Link>
  );
}
