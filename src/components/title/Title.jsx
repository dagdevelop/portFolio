import React from "react";
import "./Title.scss";
import { Separator } from "../ui/separator";

export default function Title({ label }) {
  return (
    <div className="my-title-container">
      <div className="bloc-title">
        <div className="title-label">{label}</div>
        <Separator />
      </div>
    </div>
  );
}
