import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNavMenu } from "../api/nav";
import LOGO from "../../public/Logo.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { MobileNav } from "./MobileNav";
import { AiOutlineClose } from "react-icons/ai";
import { NavMenuItem } from "../types/nav";
import { Signup } from "./Auth/Signup";
import { Button } from "./buttons/Button";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navMenu, setNavMenu] = useState<NavMenuItem[]>([]);
  const handleNav = () => {
    setNav(!nav);
  };

  const [showSignUp, setShowSignUp] = useState(false);
  const toggleSignUp = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setShowSignUp(!showSignUp);
  };

  useEffect(() => {
    const navMenu = getNavMenu();
    setNavMenu(navMenu);
  }, []);
  return (
    <>
      <div className="bg-black relative">
        <div className="container mx-auto lg:flex items-center justify-between p-8">
          <div className="text-white uppercase text-3xl flex items-center gap-2">
            <img src={LOGO} width={50} alt="Blog Logo" />
            <h3 className="pb-[0!important] font-sans3 text-7xl md:text-4xl">KellyDEV</h3>
          </div>
          <ul className="hidden lg:flex items-center justify-between gap-4 uppercase text-white font-bold">
          {navMenu.map((menu) => {
              return (
                <li key={menu.title} className="relative group">
                  <Link className="font-sans3 text-[1rem]" to={menu.href}>
                    {menu.title}
                  </Link>
                  {menu.dropdown && (
                    <ul className="hidden group-hover:block absolute top-full left-0 bg-gray-800 text-white p-2 rounded shadow-lg z-10">
                      {menu.dropdown.map((item) => (
                        <li key={item.title}>
                          <Link to={item.href} className="block px-4 py-2 hover:bg-gray-700">
                            {item.title}
                          </Link>
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
            <p className="text-white uppercase font-sans3 text-[1rem] font-bold p-0 cursor-pointer"><a onClick={toggleSignUp}>Subscribe</a></p>
          </div>
        </div>
        <div className="fixed top-10 right-4 z-40 lg:hidden">
            <Button onClick={handleNav} type="tertiary">
              {nav? <AiOutlineClose className="text-white text-2xl z-10" />:<FaBars className="text-white text-2xl" />}
            </Button>
          </div>
      </div>
      <MobileNav nav={nav} navMenu={navMenu}  />
      {showSignUp && <Signup toggleSignUp={toggleSignUp} />}
    </>
  );
};
