import React from "react";
import "./InfoItem.scss";

export default function InfoItem({icon, label, value}) {
  return <div className="info-item">
    <div className="container-info-item">
        <div className="icon"> {icon} </div>
        <div className="info-datas">
            <div className="label"> {label} </div>
            <div className="value"> {value} </div>
        </div>
    </div>
  </div>;
}
