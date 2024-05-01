import { links } from "../const";
import NavRef from "./NavRef";
import Logo from "./Logo";

export default function Header() {
  return (
    <div>
      <div className="nav">
        <Logo />
        {Object.values(links).map((value) => (
          <NavRef link={value.href} title={value.title} key={value.href} />
        ))}
      </div>
    </div>
  );
}
