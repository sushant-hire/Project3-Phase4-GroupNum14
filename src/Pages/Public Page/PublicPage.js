import React from "react";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import PublicSection from "../../Sections/Public Section/PublicSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import styles from "./PublicPage.module.css";

const PublicPage = () => {
  return (
    <div className={styles.MainPublicPageContainer}>
      <LeftHomeSection />
      <PublicSection />
      <RightHomeSection />
    </div>
  );
};

export default PublicPage;
