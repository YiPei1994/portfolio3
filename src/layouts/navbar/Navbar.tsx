import { links } from "../../contants";

function Navbar() {
  return (
    <ul className="flex gap-4 px-8 py-4 justify-between items-center fixed top-0 left-0 z-30 w-full">
      {links.map((link, i) => (
        <li key={i}>
          <a
            className={`uppercase text-bold ${
              link === "contact"
                ? "bg-gradient-to-r from-[rgb(255, 224, 116)] via-[rgb(80, 202, 228)] to-[rgb(155, 92, 255)] inline-block text-transparent bg-clip-text"
                : ""
            }`}
            href={`#${link}`}
          >
            {link}{" "}
          </a>{" "}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
