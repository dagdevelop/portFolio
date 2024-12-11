import React from "react";
import "./ExperienceItem.scss";

export default function ExperienceItem({ period, label, details }) {
  return (
    <div className="experience-item">
      <div className="period"> {period} </div>
      <div className="label"> {label} </div>
      <div>
        <ul className="details">
          {details?.map((d, key) => {
            return (
              <li key={key} className="detail">
                {" "}
                {d}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
