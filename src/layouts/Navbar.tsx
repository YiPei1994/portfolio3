import Button from "../components/Button";
import { links } from "../contants";

function Navbar() {
  return (
    <ul className="flex gap-4 px-8 py-4 justify-between items-center fixed top-0 left-0 z-30 w-full">
      {links.map((link, i) => (
        <li key={i}>
          <a className={`uppercase text-bold`} href={`#${link}`}>
            {link}{" "}
          </a>
        </li>
      ))}
      <Button className="uppercase">
        <a href="#contact">Contact</a>
      </Button>
    </ul>
  );
}

export default Navbar;
