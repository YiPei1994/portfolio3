import Button from "../components/Button";
import { links } from "../contants";

function Navbar() {
  return (
    <div className=" fixed  py-4 top-0 left-0 z-30 w-full  flex place-items-center backdrop-blur-lg">
      <ul className="flex gap-2 justify-between items-center m-auto   max-w-[400px] ">
        {links.map((link, i) => (
          <li key={i}>
            <a
              className={`uppercase text-white font-bold text-md border border-transparent hover:border-neutral-400 rounded-xl px-2 py-1 xl:px-6 xl:py-3 transition-all duration-300 hover:bg-neutral-700/50`}
              href={`#${link}`}
            >
              {link}{" "}
            </a>
          </li>
        ))}
        <Button className="uppercase text-md font-bold">
          <a href="#contact">Contact</a>
        </Button>
      </ul>
    </div>
  );
}

export default Navbar;
