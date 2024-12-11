import Image from "next/image";
import React from "react";
import "./NavBar.scss";
import Logo from "../logo/Logo";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Logo />
    </nav>
  );
}
