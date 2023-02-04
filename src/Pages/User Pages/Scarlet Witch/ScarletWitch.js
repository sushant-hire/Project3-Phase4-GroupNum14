import React from "react";
import styles from "./ScarletWitch.module.css";
import LeftHomeSection from "../../../Sections/Left Home Section/LeftHomeSection";
import RightHomeSection from "../../../Sections/Right Home Section/RightHomeSection";
import ScarletWitchSection from "../../../Sections/User Sections/Scarlet Witch Section/ScarletWitchSection";

const ScarletWitch = () => {
  return (
    <div className={styles.ParentScarletWitchContainer}>
      <LeftHomeSection />
      <ScarletWitchSection />
      <RightHomeSection />
    </div>
  );
};

export default ScarletWitch;
