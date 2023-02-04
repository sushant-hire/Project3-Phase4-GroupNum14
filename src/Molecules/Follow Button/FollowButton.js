import React, { useState } from "react";
import styles from "./FollowButton.module.css";

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <button className={styles.FollowButtonStyle} onClick={handleClick}>
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
