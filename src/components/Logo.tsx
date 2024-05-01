import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <div>Цитаты</div>
      <div>Hronyya</div>
    </Link>
  );
}
