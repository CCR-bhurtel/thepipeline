import React from "react";
import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <div>
      <div className="logo h-[50px]">
        <img src={logo.src} alt="" />
      </div>
      <nav></nav>
    </div>
  );
}

export default Navbar;
