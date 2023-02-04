import React from "react";
import styles from "./MiddleHomeTopBox.module.css";

const MiddleHomeTopBox = () => {
  return (
    <div className={styles.MiddleHomeTopBoxContainer}>
      <h3 className={styles.MiddleHomeTopBoxHeadingContainer}>Home</h3>
      <div>
        <button className={styles.MiddleHomeTopBoxButtonContainer}>
          For you
        </button>
        <button className={styles.MiddleHomeTopBoxButtonContainer}>
          Following
        </button>
      </div>
    </div>
  );
};

export default MiddleHomeTopBox;
