/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "../Assets/logo.png";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="mt-6 usm:text-[1.1rem] flex items-center justify-center flex-col">
      <div className="topnav flex  md:justify-between w-[70%] lg:w-[55%]">
        <div className="logo h-[100px] w-[250px] hidden md:block">
          <img src={logo.src} alt="the pipeline logo" />
        </div>
        <nav className="flex items-center justify-evenly w-full md:w-[initial]">
          <a className="cursor-pointer" href="/">
            <div
              className={`navitem join ${
                pathname == "/" ? "font-medium" : "font-regular"
              } hover:font-medium`}
            >
              join
            </div>
          </a>
          <a className="coursor-pointer md:ml-[2rem] lg:ml-[4rem]" href="/about">
            <div
              className={`navitem about ${
                pathname == "/about" ? "font-medium" : "font-regular"
              } hover:font-medium`}
            >
              About
            </div>
          </a>
        </nav>
      </div>

      <div className="logo-container w-full flex items-center justify-center md:hidden">
        <div className="logo h-[100px] w-[250px]">
          <img src={logo.src} alt="the pipeline logo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
