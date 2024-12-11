import React from "react";
import { PiCopyrightLight } from "react-icons/pi";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer
      id="footer"
      className=" footer row-start-3 flex gap-6 flex-wrap items-center justify-center"
    >
      Copyright <PiCopyrightLight /> Vially Dag. 2024 All Rights Reserved
    </footer>
  );
}
