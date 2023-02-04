import React from "react";
import styles from "./PublicSection.module.css";
import { homeAtom } from "../../Recoil State/Home Page State/HomeAtom";
import MiddleHomePopover from "../../Molecules/Middle Home Popover/MiddleHomePopover";
import CommentDialog from "../../Components/Comment Dialog/CommentDialog";
import ViewsDialog from "../../Components/Views Dialog/ViewsDialog";
import RetweetPopover from "../../Molecules/Retweet Popover/RetweetPopover";
import IconFunctionality from "../../Molecules/Icon Functionality/IconFunctionality";
import { useRecoilValue } from "recoil";

const PublicSection = () => {
  const tweetData = useRecoilValue(homeAtom);

  return (
    <div>
      {tweetData[0].tweets.map((button, index) => (
        <button
          key={index}
          className={styles.MiddleHomeTweetBoxButtonContainer}
        >
          <div className={styles.MiddleHomeTweetBoxGrid}>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "0.7rem", cursor: "pointer" }}>
                {" "}
                {button.photo11}
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
                {button.title11}
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
                {button.title12}
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
            {button.title13}
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
            {button.photo12}
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
            }}
          >
            <CommentDialog />
            <RetweetPopover style={{ fontSize: "5rem" }} />
            <IconFunctionality style={{ fontSize: "1.4rem" }} />
            <ViewsDialog />
          </div>
        </button>
      ))}{" "}
    </div>
  );
};

export default PublicSection;

