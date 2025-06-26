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
      <Link to="/contact" className="btn">Contact</Link>
    </>
  );
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-lg fixed w-full bg-white z-50">
      <Link to="/" className="text-3xl cursor-pointer text-blue-500 font-bold">Suraj Chaudhary</Link>
      <ul className="flex space-x-8 text-xl cursor-pointer hidden md:flex">
        {navItems}
      </ul>
      {/* Mobile Navigation */}
      <div
        className={`absolute top-0 left-0 bg-gray-200  shadow-lg w-1/2 px-4 py-12 h-[100vh] duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute right-0 p-4 text-2xl top-0"
        >
          X
        </button>
        <ul className="flex flex-col space-y-4 text-xl" onClick={toggleDrawer}>{navItems}</ul>
      </div>


      <button
        onClick={toggleDrawer}
        className={`md:hidden text-2xl ${isOpen ? "hidden" : ""}`}
      >
        <MdMenu />
      </button>
    </div>
  );
};

export default Navbar;
