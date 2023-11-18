import React from "react";
import "./style.css";

const Icon = ({ size, name, color, className, viewBox, ...props }) => {
  return (
    <svg
      version="1.1"
      xmins="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      className={`icon-svg unselectable ${className}`}
      width={size || 24}
      height={size || 24}
      viewBox={viewBox || "0 0 24 24"}
      {...props}
    >
      <use xlinkHref={`#${!!name ? name : "info-circle"}`} color={color}></use>
    </svg>
  );
};

export default Icon;
