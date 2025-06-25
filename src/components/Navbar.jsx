import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navItems = (
    <>
      <Link>About</Link>
      <Link>Skills</Link>
      <Link>Projects</Link>
      <Link>Certification</Link>
    </>
  );
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-lg">
      <h2 className="text-2xl cursor-pointer">Portfolio</h2>
      <ul className="flex space-x-8 cursor-pointer hidden sm:flex">
        {navItems}
      </ul>
      <button className="hidden sm:flex bg-blue-500 px-2 py-2 text-white rounded-lg shadow-2xl hover:bg-blue-700 duration-300 hover:scale-105">
        Contact Me
      </button>
      {/* Mobile Navigation */}
      <div
        className={`absolute top-0 left-0 bg-gray-200 shadow-lg w-1/3 px-4 py-12 h-full duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute right-0 p-4 text-2xl top-0"
        >
          X
        </button>
        <ul className="flex flex-col space-y-4" onClick={toggleDrawer}>{navItems}</ul>
      </div>


      <button
        onClick={toggleDrawer}
        className={`sm:hidden text-2xl ${isOpen ? "hidden" : ""}`}
      >
        <MdMenu />
      </button>
    </div>
  );
};

export default Navbar;
