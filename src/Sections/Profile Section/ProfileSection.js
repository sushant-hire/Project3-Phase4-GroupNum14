import React from "react";
import styles from "./ProfileSection.module.css";
import Buttons from "../../Molecules/Buttons/Buttons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  let userName = JSON.parse(localStorage.getItem("list"));
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
          Sushant Hire{" "}
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
          Sushant Hire{" "}
        </p>
        <p
          style={{
            position: "relative",
            top: "3rem",
            marginLeft: "0.9rem",
            fontSize: "0.96rem",
          }}
        >
          @{userName[0].Username}
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
            Joined January 2023
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
            <span style={{ fontWeight: "bolder" }}> 8</span> Following{" "}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bolder" }}> 0</span> Followers
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
      <img
        style={{
          height: "7.9rem",
          width: "7.9rem",
          border: "4px solid white",
          borderRadius: "555px",
          position: "relative",
          left: "1.2rem",
          bottom: "23rem",
          cursor: "pointer",
        }}
        src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
        alt="snub"
      ></img>
    </div>
  );
};

export default ProfileSection;
