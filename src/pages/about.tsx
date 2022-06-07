import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const About: NextPage = () => {
  return (
    <>
      <NavBar />
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        About
      </h2>
    </>
  );
};

export default About;
