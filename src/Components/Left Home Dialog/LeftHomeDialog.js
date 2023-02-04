import React, { useRef, useState } from "react";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Buttons from "../../Molecules/Buttons/Buttons";
import styles from "./LeftHomeDialog.module.css";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { homeAtom } from "../../Recoil State/Home Page State/HomeAtom";
import { useRecoilState } from "recoil";

const LeftHomeDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [tweetData, setTweetData] = useRecoilState(homeAtom);
  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  let userName = JSON.parse(localStorage.getItem("list"));
  console.log(image, "i am set image");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleTweetSubmit() {
    setTweetData([
      {
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
        title3: tweet,
      },
      ...tweetData,
    ]);

    setImage("");
    setOpen(false);
    setTweet("");
  }

  return (
    <div>
      <Buttons
        className={styles.TweetButtonStyle}
        buttonText="Tweet"
        onClick={handleClickOpen}
      />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          style: {
            borderRadius: "20px",
            marginBottom: "25em",
          },
        }}
      >
        <CloseRoundedIcon
          onClick={handleClose}
          style={{
            position: "relative",
            left: "0.5rem",
            top: "0.5rem",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2.5, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <input
            className={styles.MiddleHomeUserTweetBoxInput}
            id="outlined-multiline-static"
            placeholder="What's happening?"
            multiline
            rows={8}
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </Box>
        <DialogActions>
          <PermMediaOutlinedIcon
            onClick={handleImageClick}
            className={styles.DialogTweetIconStyle}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: "none" }}
            value=""
          />
          <GifBoxOutlinedIcon className={styles.DialogTweetIconStyle} />
          <PollOutlinedIcon className={styles.DialogTweetIconStyle} />
          <EmojiEmotionsOutlinedIcon className={styles.DialogTweetIconStyle} />
          <WorkHistoryOutlinedIcon className={styles.DialogTweetIconStyle} />
          <LocationOnOutlinedIcon className={styles.DialogTweetIconStyle} />

          <Buttons
            className={styles.DialogTweetButtonStyle}
            buttonText="Tweet"
            onClick={handleTweetSubmit}
          >
            Tweet
          </Buttons>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LeftHomeDialog;
