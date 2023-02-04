import React from "react";
import styles from "./RightHomeFooter.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RightHomeFooter = () => {
  return (
    <div className={styles.RightHomeFooterContainer}>
      <p>
        <span className={styles.RightHomeFooter}>Terms of Service</span>{" "}
        <span className={styles.RightHomeFooter}>Privacy Policy</span>{" "}
        <span className={styles.RightHomeFooter}>Cookie Policy</span>{" "}
        <span className={styles.RightHomeFooter}>Accessibility</span>{" "}
        <span className={styles.RightHomeFooter}>Ads info</span>{" "}
        <span className={styles.RightHomeFooter}>
          More{" "}
          <MoreHorizIcon
            style={{
              fontSize: "medium",
              marginLeft: "0.1rem",
              marginTop: "0.1rem",
            }}
          />
        </span>
      </p>
      <p className={styles.RightHomeFooterCred}>© 2023 Twitter, Inc.</p>
    </div>
  );
};

export default RightHomeFooter;
