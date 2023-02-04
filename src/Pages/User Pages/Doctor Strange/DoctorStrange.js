import React from "react";
import styles from "./DoctorStrange.module.css";
import LeftHomeSection from "../../../Sections/Left Home Section/LeftHomeSection";
import DoctorStrangeSection from "../../../Sections/User Sections/Doctor Strange Section/DoctorStrangeSection";
import RightHomeSection from "../../../Sections/Right Home Section/RightHomeSection";

const DoctorStrange = () => {
  return (
    <div className={styles.ParentDoctorStrangeContainer}>
      <LeftHomeSection />
      <DoctorStrangeSection />
      <RightHomeSection />
    </div>
  );
};

export default DoctorStrange;
