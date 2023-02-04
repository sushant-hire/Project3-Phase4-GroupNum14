import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ buttonText, startIcon, onClick, className }) => {
  return (
    <button className={className} onClick={onClick} >
      {startIcon}{buttonText}
    </button>
  );
};

export default Buttons;
