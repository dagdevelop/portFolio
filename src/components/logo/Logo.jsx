"use client";
import Image from "next/image";
import React from "react";
import "./Logo.scss";

export default function Logo({ label, width = 70, height = 70 }) {
  return (
    <div className="logo">
      <div>
        <Image
          src={"/logo/viallyLogo1.png"}
          property={"true"}
          width={width}
          height={height}
          alt="logo"
        />
      </div>
      <div className="label"> {label} </div>
      
    </div>
  );
}
