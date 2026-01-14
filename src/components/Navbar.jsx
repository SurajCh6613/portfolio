import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between items-center px-6 md:px-18 py-3 fixed w-full z-50         transition-all duration-300 
        ${
          scrolled
            ? "backdrop-blur-xl bg-secondary/40 border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <a href="#home" className="text-3xl font-bold text-gradient">
        {"<Suraj />"}
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-white text-lg">
        {navItems.map((nav) => (
          <a key={nav.name} href={nav.href}>
            {nav.name}
          </a>
        ))}
        <a href="#contact" className="bg-primary text-black px-2 rounded-md cursor-pointer hover:scale-105 duration-300">Hire Me</a>
      </ul>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full bg-[rgb(10,12,16)] text-white px-4 py-12 rounded-b-3xl shadow-lg duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute right-4 top-4 text-3xl"
        >
          X
        </button>

        <ul
          className="flex flex-col items-center space-y-6 text-xl mt-8"
          onClick={toggleDrawer}
        >
          {navItems.map((nav) => (
            <a key={nav.name} href={nav.href}>
              {nav.name}
            </a>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleDrawer}
        className={`md:hidden text-white text-3xl ${isOpen ? "hidden" : ""}`}
      >
        <MdMenu />
      </button>
    </div>
  );
};

export default Navbar;
