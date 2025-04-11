import { useState } from "react";
import { navMenu } from "../constants/data";
import LOGO from "../../public/Logo.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { MobileNav } from "./MobileNav";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="bg-black relative">
        <div className="container mx-auto lg:flex items-center justify-between p-8">
          <div className="text-white uppercase text-3xl flex items-center gap-2">
            <img src={LOGO} width={50} alt="Blog Logo" />
            <h2 className="font-sans3 text-7xl md:text-4xl">KellyDEV</h2>
          </div>
          <ul className="hidden lg:flex items-center justify-between gap-4 uppercase text-white font-bold">
          {navMenu.map((menu) => {
              return (
                <li key={menu.title} className="relative">
                  <a className="font-sans3 text-[1rem]" href={menu.href}>
                    {menu.title}
                  </a>
                  {menu.dropdown && (
                    <ul className="hidden absolute top-full left-0 bg-gray-800 text-white p-2 rounded shadow-lg">
                      {menu.dropdown.map((item) => (
                        <li key={item.title}>
                          <a href={item.href} className="block px-4 py-2 hover:bg-gray-700">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex items-center justify-between gap-4">
            <div className="flex items-center justify-between gap-4 border-2 border-gray-600 rounded-[5px] bg-gray-800 py-[.25rem]">
              <input className="placeholder-white px-4" type="Search" placeholder="Search..." />
              <FaSearch className="text-white mr-4" />
            </div>
            <p className="text-white uppercase font-sans3 text-[1rem] font-bold"><a href="#">Subscribe</a></p>
          </div>
        </div>
        <div className="lg:hidden">
            <button onClick={handleNav} className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full">
              {nav? <AiOutlineClose className="text-white text-2xl" />:<FaBars className="text-white text-2xl" />}
            </button>
          </div>
      </div>
      <MobileNav nav={nav} handleNav={handleNav} />
    </>
  );
};
