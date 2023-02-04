import React, { useState } from "react";
import styles from "./RightHomeFollowBox.module.css";
import FollowButton from "../../Molecules/Follow Button/FollowButton";
import { useNavigate } from "react-router-dom";

const whotofollowData = [
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://www.sideshow.com/storage/product-images/909994/doctor-strange_marvel_square.jpg"
        alt="drstrange"
      />
    ),
    title1: "Doctor Strange ",
    title2: "@DoctorStrange",
    button: <FollowButton id={1} />,
  },
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://www.sideshow.com/storage/product-images/909698/scarlet-witch_marvel_square.jpg"
        alt="scarletwitch"
      />
    ),
    title1: "Scarlet Witch",
    title2: "@ScarletWitch",
    button: <FollowButton id={2} />,
  },
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
        alt="spidey"
      />
    ),
    title1: "Spider Man",
    title2: "@SpiderMan",
    button: <FollowButton id={3} />,
  },
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://www.sideshow.com/storage/product-images/3002082/the-incredible-hulk_marvel_square.jpg"
        alt="hulk"
      />
    ),
    title1: "Incredible Hulk",
    title2: "@HulkSmash",
    button: <FollowButton id={4} />,
  },
];
const RightHomeFollowBox = () => {
  const navigate = useNavigate();

  const [Follows, setFollow] = useState(whotofollowData.slice(0, 2));
  const [isShowing, setIsShowing] = useState(false);

  function HandleNavigate() {
    navigate("/publicpage");
  }

  function HandleFollow() {
    setIsShowing(!isShowing);
    if (isShowing) {
      return setFollow(whotofollowData.slice(0, 2));
    }
    setFollow(whotofollowData);
  }
  return (
    <div className={styles.FollowBoxMainContainer}>
      <h3 className={styles.FollowBoxHeadingContainer}>Who to follow</h3>
      {Follows.map((button, index) => (
        <button key={index} className={styles.FollowBoxButtonContainer}>
          <div onClick={HandleNavigate} style={{ marginLeft: "0.5rem" }}>
            {" "}
            {button.photo}
          </div>
          <div className={styles.FollowBox}>
            <div style={{ fontWeight: "bold" }}> {button.title1}</div>
            <div> {button.title2}</div>
          </div>
          <div> {button.button}</div>
        </button>
      ))}
      <p className={styles.FollowBoxShowMoreContainer} onClick={HandleFollow}>
        {isShowing ? "Show Less" : "Show More"}{" "}
      </p>{" "}
    </div>
  );
};

export default RightHomeFollowBox;