import React from "react";
import MiddleHomeTopBox from "../../Components/Middle Home Top Box/MiddleHomeTopBox";
import MiddleHomeTweetBox from "../../Components/Middle Home Tweet Box/MiddleHomeTweetBox";
import MiddleHomeUserTweetBox from "../../Components/Middle Home User Tweet Box/MiddleHomeUserTweetBox";
import styles from "./MiddleHomeSection.module.css";

const MiddleHomeSection = () => {
  return (
    <div className={styles.MiddleParentContainer}>
      <MiddleHomeTopBox />
      {/* <MiddleHomeUserTweetBox /> */}
      <MiddleHomeTweetBox />
    </div>
  );
};

export default MiddleHomeSection;
