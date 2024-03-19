import { useState } from "react";
import images from "../assets/images";
const { headerLogo } = images;
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="py-8 absolute padding-x z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
