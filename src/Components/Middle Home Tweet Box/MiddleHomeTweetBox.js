import React, { useState, useRef } from "react";
import styles from "./MiddleHomeTweetBox.module.css";
import CommentDialog from "../Comment Dialog/CommentDialog";
import ViewsDialog from "../Views Dialog/ViewsDialog";
import RetweetPopover from "../../Molecules/Retweet Popover/RetweetPopover";
import IconFunctionality from "../../Molecules/Icon Functionality/IconFunctionality";
import MiddleHomePopover from "../../Molecules/Middle Home Popover/MiddleHomePopover";
import { homeAtom } from "../../Recoil State/Home Page State/HomeAtom";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Buttons from "../../Molecules/Buttons/Buttons";
import { useRecoilState } from "recoil";

const MiddleHomeTweetBox = () => {
  const [tweetData, setTweetData] = useRecoilState(homeAtom);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0])
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  let userName = JSON.parse(localStorage.getItem("list"));
  console.log(userName);

  const [newTweetData, setNewTweetData] = useState({
    photo1: (
      <img
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
        src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
        alt="boredapephoto"
      />
    ),
    photo2: (
      <img
        style={{ width: "85%", height: "auto", borderRadius: "10px" }}
        src={image || ""}
        alt=""
      />
    ),
    title1: "Sushant Hire",
    title2: `@${userName[0].Username}`,
    title3: "",
  });

  function handleSubmit() {
    setTweetData([newTweetData, ...tweetData]);
    setNewTweetData({
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
          src={image || ""}
          alt=""
        />
      ),
      title1: "Sushant Hire",
      title2: `@${userName[0].Username}`,
      title3: "",
    });
    setImage("");
  }

  return (
    <div
      className={styles.MiddleHomeTweetBoxContainer}
      style={{ border: "0.1px solid gainsboro" }}
    >
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
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
          value=''
        />
        <div
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <PermMediaOutlinedIcon
            onClick={handleImageClick}
            className={styles.DialogTweetIconStyle}
          />
          <GifBoxOutlinedIcon className={styles.DialogTweetIconStyle} />
          <PollOutlinedIcon className={styles.DialogTweetIconStyle} />
          <EmojiEmotionsOutlinedIcon className={styles.DialogTweetIconStyle} />
          <WorkHistoryOutlinedIcon className={styles.DialogTweetIconStyle} />
          <LocationOnOutlinedIcon className={styles.DialogTweetIconStyle} />
          <Buttons
            className={styles.DialogTweetButtonStyle}
            buttonText="Tweet"
            onClick={() => {
              handleSubmit();
            }}
          >
            Tweet
          </Buttons>
        </div>
      </div>

      {tweetData.map((button, index) => (
        <button
          key={index}
          className={styles.MiddleHomeTweetBoxButtonContainer}
        >
          <div className={styles.MiddleHomeTweetBoxGrid}>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "0.7rem", cursor: "pointer" }}>
                {" "}
                {button.photo1}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  marginTop: "0.9rem",
                  fontSize: "0.9375rem",
                  marginLeft: "0.2rem",
                  cursor: "pointer",
                }}
              >
                {" "}
                {button.title1}
              </div>
              <div
                style={{
                  marginTop: "0.9rem",
                  fontSize: "0.9375rem",
                  marginLeft: "0.3rem",
                  cursor: "pointer",
                }}
              >
                {" "}
                {button.title2}
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                marginTop: "0.8rem",
                marginRight: "0.3rem",
                cursor: "pointer",
              }}
            >
              {" "}
              <MiddleHomePopover />
            </div>
          </div>
          <div
            style={{
              fontSize: "1rem",
              textAlign: "left",
              marginLeft: "5.1rem",
              position: "relative",
              bottom: "2.4rem",
            }}
          >
            {" "}
            {button.title3}
          </div>
          <div
            style={{
              marginLeft: "1rem",
              position: "relative",
              left: "1rem",
              bottom: "1.2rem",
              cursor: "pointer",
            }}
          >
            {" "}
            {button.photo2}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.5rem",
              marginLeft: "7rem",
              marginRight: "4rem",
              cursor: "pointer",
              position: "relative",
              bottom: "0.8rem",
              cursor: "pointer",
            }}
          >
            <CommentDialog />
            <RetweetPopover style={{ fontSize: "5rem" }} />
            <IconFunctionality style={{ fontSize: "1.4rem" }} />
            <ViewsDialog />
          </div>
        </button>
      ))}
    </div>
  );
};

export default MiddleHomeTweetBox;
