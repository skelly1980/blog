import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../public/Logo.png";
import { getNavMenu } from "../api/nav";
import { FaSearch, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavMenuItem } from "../types/nav";

export const Footer = () => {
  const [navMenu, setNavMenu] = useState<NavMenuItem[]>([]);

  useEffect(() => {
      const navMenu = getNavMenu();
      setNavMenu(navMenu);
    }, []);
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-2 py-4">
          <div className="flex items-center justify-center gap-2">
            <img src={LOGO} width={50} alt="Blog Logo" />
            <p className="font-sans3 text-2xl md:text-4xl uppercase">Kellydev</p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="flex items-center justify-between gap-4 border-2 border-gray-600 rounded-[5px] bg-gray-800 py-[.25rem]">
              <input className="placeholder-white px-4" type="Search" placeholder="Search..." />
              <FaSearch className="text-white mr-4" />
            </div>
            <p className="text-white uppercase font-sans3 text-[1rem] font-bold">
              <Link to="#">Subscribe</Link>
            </p>
            <div className="flex items-center justify-center gap-4 lg:ml-12">
              <Link to="#" className="text-white">
                <FaFacebook size={24} />
              </Link>
              <Link to="#" className="text-white">
                <FaInstagram size={24} />
              </Link>
              <Link to="#" className="text-white">
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center border-t-2 border-gray-600 w-full pb-4">
        <div className="flex flex-col items-center justify-between gap-2 py-4 lg:flex-row">
          <div className="flex items-center gap-2">
            <ul className="flex items-center gap-4">
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
              |
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-4 uppercase text-white font-bold">
              {navMenu.map((menu) => {
                return (
                  <li key={menu.title}>
                    <Link to={menu.href}>{menu.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
