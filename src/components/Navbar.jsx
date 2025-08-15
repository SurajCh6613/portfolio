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
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/certifications">Certification</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
  return (
    <div className="flex justify-between items-center px-4 py-3 shadow-lg fixed w-full bg-gray-800 z-50">
      <Link to="/" className="text-3xl cursor-pointer bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-bold">Suraj</Link>
      <ul className="flex space-x-8 text-xl cursor-pointer hidden md:flex text-white">
        {navItems}
      </ul>
      {/* Mobile Navigation */}
      <div
        className={`absolute top-0 left-0 bg-gray-700 text-white  shadow-lg w-1/2 px-4 py-12 h-[100vh] duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute right-0 p-4 text-2xl top-0"
        >
          X
        </button>
        <ul className="flex flex-col space-y-4 text-xl items-center" onClick={toggleDrawer}>{navItems}</ul>
      </div>


      <button
        onClick={toggleDrawer}
        className={`md:hidden text-2xl text-white ${isOpen ? "hidden" : ""}`}
      >
        <MdMenu />
      </button>
    </div>
  );
};

export default Navbar;
