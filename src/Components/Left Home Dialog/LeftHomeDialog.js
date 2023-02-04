import React from "react";
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

const LeftHomeDialog = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          />
        </Box>
        <DialogActions>
          <PermMediaOutlinedIcon className={styles.DialogTweetIconStyle} />
          <GifBoxOutlinedIcon className={styles.DialogTweetIconStyle} />
          <PollOutlinedIcon className={styles.DialogTweetIconStyle} />
          <EmojiEmotionsOutlinedIcon className={styles.DialogTweetIconStyle} />
          <WorkHistoryOutlinedIcon className={styles.DialogTweetIconStyle} />
          <LocationOnOutlinedIcon className={styles.DialogTweetIconStyle} />

          <Buttons
            className={styles.DialogTweetButtonStyle}
            buttonText="Tweet"
            onClick={handleClose}
          >
            Tweet
          </Buttons>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LeftHomeDialog;
