import React from "react";
import styles from "./LeftHomeSection.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import LeftHomeDialog from "../../Components/Left Home Dialog/LeftHomeDialog";
import PopoverFunc from "../../Molecules/Popover/Popover";
import { Link } from "react-router-dom";

const buttonData = [
  {
    title: (
      <Link to="/home" className={styles.homeTitle}>
        Home
      </Link>
    ),
    icon: <HomeRoundedIcon style={{ fontSize: "2rem" }} />,
  },
  { title: "Explore", icon: <TagRoundedIcon style={{ fontSize: "2rem" }} /> },
  {
    title: "Notifications",
    icon: <NotificationsNoneRoundedIcon style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Messages",
    icon: <EmailOutlinedIcon style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Bookmarks",
    icon: <TurnedInNotRoundedIcon style={{ fontSize: "2rem" }} />,
  },
  { title: "Lists", icon: <ListAltRoundedIcon style={{ fontSize: "2rem" }} /> },
  {
    title: (
      <Link to="/profile" className={styles.profileTitle}>
        Profile
      </Link>
    ),
    icon: <PersonOutlineOutlinedIcon style={{ fontSize: "2rem" }} />,
  },
  {
    title: "More",
    icon: <ExpandCircleDownOutlinedIcon style={{ fontSize: "2rem" }} />,
  },
];

const LeftHomeSection = () => {
  return (
    <div className={styles.LeftHomeSectionMainContainer}>
      <Link to="/home">
        <TwitterIcon
          className={styles.TwitterIconStyle}
          style={{
            fontSize: "2.1vw",
          }}
        />{" "}
      </Link>

      {buttonData.map((button) => (
        <button className={styles.LeftSectionButtons}>
          <span className={styles.ButtonInformation}>
            {button.icon}
            {button.title}
          </span>
        </button>
      ))}
      <LeftHomeDialog />
      <PopoverFunc />
    </div>
  );
};

export default LeftHomeSection;
