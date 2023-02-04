import React, { useState } from "react";
import styles from "./MiddleHomeUserTweetBox.module.css";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Buttons from "../../Molecules/Buttons/Buttons";
import { homeAtom } from "../../Recoil State/Home Page State/HomeAtom";
import { useRecoilState } from "recoil";

const MiddleHomeUserTweetBox = () => {
  const [tweetData, setTweetData] = useRecoilState(homeAtom);
  const [newTweetData, setNewTweetData] = useState({
    photo1: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
        alt="drstrange1"
      />
    ),
    photo2: (
      <img
        style={{ width: "85%", height: "auto", borderRadius: "10px" }}
        src="https://giffiles.alphacoders.com/214/214285.gif"
        alt="drstrange2"
      />
    ),
    title1: "Sushant Hire",
    title2: "@reachbarsonist",
    title3: "",
  });

  

  return (
    <div className={styles.MiddleHomeUserTweetBoxParentContainer}>
      <img
        src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
        alt=""
        className={styles.photo}
      />{" "}
      <input
        className={styles.MiddleHomeUserTweetBoxInput}
        placeholder="What's happening?"
        value={newTweetData.title3}
        onChange={(e) =>
          setNewTweetData({ ...newTweetData, title3: e.target.value })
        }
      />
      <div
        style={{
          display: "flex",
          position: "relative",
          top: "0.8rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PermMediaOutlinedIcon className={styles.DialogTweetIconStyle} />
        <GifBoxOutlinedIcon className={styles.DialogTweetIconStyle} />
        <PollOutlinedIcon className={styles.DialogTweetIconStyle} />
        <EmojiEmotionsOutlinedIcon className={styles.DialogTweetIconStyle} />
        <WorkHistoryOutlinedIcon className={styles.DialogTweetIconStyle} />
        <LocationOnOutlinedIcon className={styles.DialogTweetIconStyle} />
        <Buttons
          className={styles.DialogTweetButtonStyle}
          buttonText="Tweet"
        >
          Tweet
        </Buttons>
      </div>
    </div>
  );
};

export default MiddleHomeUserTweetBox;
