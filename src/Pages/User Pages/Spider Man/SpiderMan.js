import React from "react";
import styles from "./SpiderMan.module.css";
import LeftHomeSection from "../../../Sections/Left Home Section/LeftHomeSection";
import RightHomeSection from "../../../Sections/Right Home Section/RightHomeSection";
import SpiderManSection from "../../../Sections/User Sections/Spider Man Section/SpiderManSection";

const SpiderMan = () => {
  return (
    <div className={styles.ParentScarletWitchContainer}>
      <LeftHomeSection />
      <SpiderManSection />
      <RightHomeSection />
    </div>
  );
};

export default SpiderMan;
