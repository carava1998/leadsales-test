import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Menu: NextPage = () => {
  return (
    <>
      <NavBar />
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Menu
      </h2>
    </>
  );
};

export default Menu;
