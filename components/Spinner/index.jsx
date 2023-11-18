import React from "react";
import "./style.css";
import Icon from "../Icon";
const Spinner = ({ full, size, children }) => {
  return (
    <div
      className={` ${
        full ? "spinner-full" : ""
      } spinner--container aic unselectable`}
    >
      <Icon name="load spinner" className="rotate" size={size} />
      {children}
    </div>
  );
};
export default Spinner;
