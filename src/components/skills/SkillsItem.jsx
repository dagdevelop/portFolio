import React from "react";
import "./Skills.scss";

export default function SkillsItem({ icon, label }) {
  return (
    <div className="skills">
      <div className="icon"> {icon} </div>
      <div className="label"> {label} </div>
    </div>
  );
}
