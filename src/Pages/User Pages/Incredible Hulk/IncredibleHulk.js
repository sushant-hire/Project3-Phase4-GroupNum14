import React from "react";
import styles from "./IncredibleHulk.module.css";
import LeftHomeSection from "../../../Sections/Left Home Section/LeftHomeSection";
import RightHomeSection from "../../../Sections/Right Home Section/RightHomeSection";
import IncredibleHulkSection from "../../../Sections/User Sections/Incredible Hulk Section/IncredibleHulkSection";

const IncredibleHulk = () => {
  return (
    <div className={styles.ParentIncredibleHulkContainer}>
      <LeftHomeSection />
      <IncredibleHulkSection />
      <RightHomeSection />
    </div>
  );
};

export default IncredibleHulk;
