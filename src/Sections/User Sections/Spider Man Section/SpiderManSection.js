import React from "react";
import styles from "./SpiderManSection.module.css";
import Buttons from "../../../Molecules/Buttons/Buttons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import CommentDialog from "../../../Components/Comment Dialog/CommentDialog";
import ViewsDialog from "../../../Components/Views Dialog/ViewsDialog";
import RetweetPopover from "../../../Molecules/Retweet Popover/RetweetPopover";
import IconFunctionality from "../../../Molecules/Icon Functionality/IconFunctionality";
import MiddleHomePopover from "../../../Molecules/Middle Home Popover/MiddleHomePopover";

const SpiderManSection = () => {
  const tweetData = [
    {
      photo1: (
        <Link to="/SpiderMan">
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
            alt="spidey1"
          />
        </Link>
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://giffiles.alphacoders.com/155/15523.gif"
          alt="spidey2"
        />
      ),
      title1: "Spider Man",
      title2: "@SpiderMan",
      title3: "With great power comes great responsibility.",
    },
    {
      photo1: (
        <Link to="/SpiderMan">
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
            alt="spidey1"
          />
        </Link>
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://giffiles.alphacoders.com/155/15523.gif"
          alt="spidey2"
        />
      ),
      title1: "Spider Man",
      title2: "@SpiderMan",
      title3: "With great power comes great responsibility.",
    },
    {
      photo1: (
        <Link to="/SpiderMan">
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
            alt="spidey1"
          />
        </Link>
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://giffiles.alphacoders.com/155/15523.gif"
          alt="spidey2"
        />
      ),
      title1: "Spider Man",
      title2: "@SpiderMan",
      title3: "With great power comes great responsibility.",
    },
    {
      photo1: (
        <Link to="/SpiderMan">
          <img
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "5px" }}
            src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
            alt="spidey1"
          />
        </Link>
      ),
      photo2: (
        <img
          style={{ width: "85%", height: "auto", borderRadius: "10px" }}
          src="https://giffiles.alphacoders.com/155/15523.gif"
          alt="spidey2"
        />
      ),
      title1: "Spider Man",
      title2: "@SpiderMan",
      title3: "With great power comes great responsibility.",
    },
  ];
  return (
    <div className={styles.ProfileMainContainer}>
      <div className={styles.ProfileHeadingContainer}>
        <h3 className={styles.ProfileHeading3Container}>
          {" "}
          <Link to="/home">
            <ArrowBackIcon
              style={{
                marginRight: "1.5rem",
                position: "relative",
                top: "0.7rem",
              }}
            />
          </Link>
          Spider Man
        </h3>
        <p className={styles.ProfileHeadingParaContainer}>0 Tweets</p>
      </div>
      <span className={styles.ProfilePhotoContainer}>Photo will be here</span>
      <div className={styles.ProfileDetailsContainer}>
        <p
          style={{
            position: "relative",
            top: "4.2rem",
            marginLeft: "1rem",
            fontSize: "large",
            fontWeight: "bolder",
          }}
        >
          Spider Man
        </p>
        <p
          style={{
            position: "relative",
            top: "3rem",
            marginLeft: "0.9rem",
            fontSize: "0.96rem",
          }}
        >
          @SpiderMan
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            position: "relative",
            top: "2.4rem",
          }}
        >
          <CalendarMonthIcon
            style={{
              position: "relative",
              top: "1.1rem",
              marginLeft: "0.8rem",
              fontSize: "1.2rem",
            }}
          />
          <p
            style={{
              position: "relative",
              right: "0.6rem",
              fontSize: "1rem",
            }}
          >
            {" "}
            Joined March 2020
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginLeft: "1rem",
            fontSize: "0.9rem",
            position: "relative",
            top: "1rem",
          }}
        >
          <p>
            <span style={{ fontWeight: "bolder" }}> 84</span> Following{" "}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bolder" }}> 9.4M</span> Followers
          </p>
        </div>
        <Buttons
          className={styles.ProfileEditButton}
          buttonText="Edit Profile"
        />{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Buttons className={styles.ProfileTodoButton} buttonText="Tweets" />
          <Buttons
            className={styles.ProfileTodoButton}
            buttonText="Tweets & Replies"
          />
          <Buttons className={styles.ProfileTodoButton} buttonText="Media" />
          <Buttons className={styles.ProfileTodoButton} buttonText="Likes" />
        </div>
      </div>

      <div
        className={styles.MiddleHomeTweetBoxContainer}
        style={{ border: "0.1px solid gainsboro" }}
      >
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
        <img
           style={{
            height: "7.9rem",
            width: "7.9rem",
            border: "4px solid white",
            borderRadius: "555px",
            position: "relative",
            right: "13.25rem",
            bottom: "129.3rem",
            cursor: "pointer",
          }}
          src="https://im.rediff.com/300-300/movies/2019/jul/08spider-man1.jpg"
          alt="snub"
        ></img>
      </div>
    </div>
  );
};

export default SpiderManSection;
