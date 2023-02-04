import React from "react";
import styles from "./Profile.module.css";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import ProfileSection from "../../Sections/Profile Section/ProfileSection";

const Profile = () => {
  return (
    <div className={styles.ParentProfileContainer}>
      <LeftHomeSection />
      <ProfileSection />
      <RightHomeSection />
    </div>
  );
};

export default Profile;
