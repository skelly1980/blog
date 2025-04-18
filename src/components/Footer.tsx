import React, { useEffect, useState } from "react";
import LOGO from "../../public/Logo.png";
import { getNavMenu } from "../api/nav";
import { FaSearch, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const [navMenu, setNavMenu] = useState([]);

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
            <h2 className="font-sans3 text-7xl md:text-4xl uppercase">Kellydev</h2>
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="flex items-center justify-between gap-4 border-2 border-gray-600 rounded-[5px] bg-gray-800 py-[.25rem]">
              <input className="placeholder-white px-4" type="Search" placeholder="Search..." />
              <FaSearch className="text-white mr-4" />
            </div>
            <p className="text-white uppercase font-sans3 text-[1rem] font-bold">
              <a href="#">Subscribe</a>
            </p>
            <div className="flex items-center justify-center gap-4 lg:ml-12">
              <a href="#" className="text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center border-t-2 border-gray-600 w-full pb-4">
        <div className="flex flex-col items-center justify-between gap-2 py-4 lg:flex-row">
          <div className="flex items-center gap-2">
            <ul className="flex items-center gap-4">
              <li>
                <a href="#">Terms of Service</a>
              </li>
              |
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-4 uppercase text-white font-bold">
              {navMenu.map((menu) => {
                return (
                  <li key={menu.title}>
                    <a href={menu.href}>{menu.title}</a>
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
