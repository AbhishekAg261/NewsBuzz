import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-nav ">
      <nav className="container flex justify-between gap-5 items-center py-3 text-body">
        <div className="flex gap-2">
          <div className="bg-logo bg-center bg-cover w-7 h-7 lg:w-10 lg:h-10"></div>
          <p className="text-white text-xl lg:text-2xl font-bold">NewsBuzz</p>
        </div>
        <ul className="hidden lg:flex flex-wrap lg:text-sm lg:gap-x-5 xl:gap-x-7 xl:text-[1rem] 2xl:text-lg 2xl:gap-x-10 items-center justify-between text-white text-sm ">
          <li>
            {" "}
            <Link className="hover-link" to="/">
              Home
            </Link>
          </li>

          <li>
            {" "}
            <Link className="hover-link" to="/business">
              Business
            </Link>
          </li>

          <li>
            {" "}
            <Link className="hover-link" to="/general">
              General
            </Link>
          </li>

          <li>
            {" "}
            <Link className="hover-link" to="/entertainment">
              Entertainment
            </Link>
          </li>

          <li>
            {" "}
            <Link className="hover-link" to="/health">
              Health
            </Link>
          </li>

          <li>
            {" "}
            <Link className="hover-link" to="/science">
              Science
            </Link>
          </li>

          <li>
            {" "}
            <Link className="hover-link" to="/sports">
              Sports
            </Link>
          </li>
          <li>
            {" "}
            <Link className="hover-link" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
        <i className="flex lg:hidden ri-menu-fill text-white text-3xl"></i>
      </nav>
    </header>
  );
};

export default NavBar;
