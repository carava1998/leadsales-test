import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const activeClass =
    "inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white";
  const inactiveClass =
    "inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3";
  return (
    <ul className="flex justify-center flex-row pt-3 flex border-b">
      <li className="mr-3">
        <Link href="/">
          <a
            className={
              router.pathname == "/" ? `"${activeClass}"` : `"${inactiveClass}"`
            }
          >
            Home
          </a>
        </Link>
      </li>
      <li className="mr-3">
        <Link href="/about">
          <a
            className={
              router.pathname == "/about"
                ? `"${activeClass}"`
                : `"${inactiveClass}"`
            }
          >
            About
          </a>
        </Link>
      </li>
      <li className="mr-3">
        <Link href="/contact">
          <a
            className={
              router.pathname == "/contact"
                ? `"${activeClass}"`
                : `"${inactiveClass}"`
            }
          >
            Contact
          </a>
        </Link>
      </li>
      <li className="mr-3">
        <Link href="/menu">
          <a
            className={
              router.pathname == "/menu"
                ? `"${activeClass}"`
                : `"${inactiveClass}"`
            }
          >
            Menu
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
