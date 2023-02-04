import React, { useState } from "react";
import styles from "./RightHomeFollowBox.module.css";
import FollowButton from "../../Molecules/Follow Button/FollowButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { OtherUserDetails } from "../../Recoil State/OtherUserProfileDetails/OtherUserProfileDetails";
import { useSetRecoilState } from "recoil";

const whotofollowData = [
  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://www.sideshow.com/storage/product-images/909994/doctor-strange_marvel_square.jpg"
        alt="drstrange"
      />
    ),
    photo1: (
      <img
        style={{ width: "8rem", height: "8rem", borderRadius: "150px" }}
        src="https://www.sideshow.com/storage/product-images/909994/doctor-strange_marvel_square.jpg"
        alt="drstrange"
      />
    ),
    title1: "Doctor Strange",
    title2: "@DoctorStrange",
    title3: "This is a Doctor Strange tweet.",
    photo2: (
      <img
        style={{ width: "85%", height: "auto", borderRadius: "10px" }}
        src="https://giffiles.alphacoders.com/214/214285.gif"
        alt="drstrange2"
      />
    ),
    button: <FollowButton id={1} />,
    tweets: [
      {
        id: 11,
        photo11: (
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://www.sideshow.com/storage/product-images/909994/doctor-strange_marvel_square.jpg"
            alt="drstrange1"
          />
        ),
        photo12: (
          <img
            style={{ width: "85%", height: "auto", borderRadius: "10px" }}
            src="https://giffiles.alphacoders.com/214/214285.gif"
            alt="drstrange2"
          />
        ),
        title11: "Doctor Strange",
        title12: "@DoctorStrange",
        title13: "This is a Doctor Strange tweet.",
      },
      {
        id: 12,
        photo11: (
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://www.sideshow.com/storage/product-images/909994/doctor-strange_marvel_square.jpg"
            alt="drstrange1"
          />
        ),
        photo12: (
          <img
            style={{ width: "85%", height: "auto", borderRadius: "10px" }}
            src="https://giffiles.alphacoders.com/214/214285.gif"
            alt="drstrange2"
          />
        ),
        title11: "Doctor Strange",
        title12: "@DoctorStrange",
        title13: "This is a second Doctor Strange tweet.",
      },
    ],
  },

  {
    photo: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://www.sideshow.com/storage/product-images/909698/scarlet-witch_marvel_square.jpg"
        alt="scarletwitch"
      />
    ),
    photo1: (
      <img
        style={{ width: "8rem", height: "8rem", borderRadius: "150px" }}
        src="https://www.sideshow.com/storage/product-images/909698/scarlet-witch_marvel_square.jpg"
        alt="scarletwitch"
      />
    ),
    photo2: (
      <img
        style={{ width: "85%", height: "auto", borderRadius: "10px" }}
        src="https://media0.giphy.com/media/1Euph36tcV2KmmgGEC/giphy.gif"
        alt="scarletwitch2"
      />
    ),
    title3: "I have everything under control.",

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
    photo1: (
      <img
        style={{width: "8rem", height: "8rem", borderRadius: "150px" }}
        src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
        alt="spidey"
      />
    ),
    photo2: (
      <img
        style={{ width: "85%", height: "auto", borderRadius: "10px" }}
        src="https://giffiles.alphacoders.com/155/15523.gif"
        alt="spidey2"
      />
    ),
    title3: "With great power comes great responsibility.",
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
    photo1: (
      <img
        style={{
          width: "8rem", height: "8rem",
          borderRadius: "150px",
        }}
        src="https://www.sideshow.com/storage/product-images/3002082/the-incredible-hulk_marvel_square.jpg"
        alt="hulk"
      />
    ),
    photo2: (
      <img
        style={{ width: "85%", height: "auto", borderRadius: "10px" }}
        src="https://giffiles.alphacoders.com/161/161178.gif"
        alt="hulk2"
      />
    ),
    title3: "Maybe I won't smash this.",
    title1: "Incredible Hulk",
    title2: "@HulkSmash",
    button: <FollowButton id={4} />,
  },
];
const RightHomeFollowBox = () => {
  const [Follows, setFollow] = useState(whotofollowData.slice(0, 2));
  const [isShowing, setIsShowing] = useState(false);

  function HandleFollow() {
    setIsShowing(!isShowing);
    if (isShowing) {
      return setFollow(whotofollowData.slice(0, 2));
    }
    setFollow(whotofollowData);
  }
  const setUserDetails = useSetRecoilState(OtherUserDetails);
  const navigate = useNavigate();
  function redirectToOtherProfilePage(button) {
    console.log(button, "I am from who to folow section");
    setUserDetails(button);
    navigate("/otherUserProfile");
  }
  return (
    <div className={styles.FollowBoxMainContainer}>
      <h3 className={styles.FollowBoxHeadingContainer}>Who to follow</h3>
      {Follows.map((button, index) => (
        <button key={index} className={styles.FollowBoxButtonContainer}>
          <div
            onClick={() => redirectToOtherProfilePage(button)}
            style={{ marginLeft: "0.5rem" }}
          >
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