import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import Buttons from "../../Molecules/Buttons/Buttons";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { FcGoogle } from "react-icons/fc";

import styles from "./Login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { loginAtom } from "../../Recoil State/Login Page State/LoginAtom";
import { useRecoilState } from "recoil";

const Login = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");

  const [open] = useState(true);
  const [loginStatus, setLoginStatus] = useRecoilState(loginAtom);
  const Nav = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  let getData = JSON.parse(localStorage.getItem("list"));
  console.log(getData, "i am from localstorage");
  function handleNext() {
    const NewArry = getData.filter(
      (x) =>
        x.Username === username || x.Email === username || x.Number === username
    );
    console.log(NewArry, "HANDLE Next");
    if (NewArry.length === 0) {
      alert("User not found!");
    } else {
      setShow(true);
      alert("User found! Please type in your password.");
      //

      setData(NewArry);
    }
  }
  function capturePassword(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }
  function caputureUserName(e) {
    setUsername(e.target.value);
    console.log(e.target.value);
  }
  // function captureNumber(e) {
  //   setNumber(e.target.value);
  // }
  function submitHere(event) {
    event.preventDefault();
    if (data[0].Password === password) {
      setLoginStatus(true);
      alert("Congratulations! You are now logged in!");
      Nav("/home");
    } else {
      alert("Password doesn't match");
    }
  }
  return (
    <Dialog
      className={styles.dialogContainer}
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius: "15px",
        },
      }}
    >
      {show ? (
        <>
          <div className={styles.newDialogContentContainer}>
            <DialogTitle
              className={styles.newDialogHeading}
              id="responsive-dialog-title"
            >
              <span
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "bolder",
                  position: "relative",
                  bottom: "2.5rem",
                }}
              >
                {"Enter password"}
              </span>
            </DialogTitle>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                value={username}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="password"
                placeholder="Password"
                value={password}
                onChange={capturePassword}
              />
            </Box>
            <p style={{ position: "relative", top: "1rem", cursor: "pointer" }}>
              Forgot Password?{" "}
              <span
                className={styles.FooterRouter}
                style={{ color: "#00ACEE" }}
              >
                Click here
              </span>
              .
            </p>
            <Buttons
              buttonText="Login"
              className={styles.buttonStyleLogin}
              onClick={submitHere}
            />

            <span>
              Don't have an account?{" "}
              <Link className={styles.FooterRouter} to="/signup">
                {" "}
                Sign up
              </Link>
              .
            </span>
          </div>{" "}
        </>
      ) : (
        <div className={styles.dialogContentContainer}>
          <TwitterIcon
            style={{
              fontSize: "2.5vw",
              color: "#00ACEE",
              position: "relative",
              top: "40px",
            }}
          />
          <DialogTitle
            className={styles.dialogHeading}
            id="responsive-dialog-title"
          >
            <span
              style={{
                fontSize: "2vw",
                fontWeight: "bolder",
                position: "relative",
                top: "40px",
              }}
            >
              {"Sign in to Twitter"}
            </span>
          </DialogTitle>
          <Buttons
            startIcon={
              <FcGoogle
                style={{ fontSize: "1.35rem", marginRight: "0.5rem" }}
              />
            }
            buttonText="Sign in with Google"
            className={styles.buttonStyleGoogle}
          />
          <Buttons
            startIcon={<AppleIcon style={{ marginRight: "0.5rem" }} />}
            buttonText="Sign in with Apple"
            className={styles.buttonStyleApple}
          />
          <p className={styles.para}>
            <span className={styles.paraSpan}>or</span>
          </p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Phone, email or username"
              variant="outlined"
              value={username}
              onChange={caputureUserName}
            />
          </Box>
          <Buttons
            buttonText="Next"
            className={styles.buttonStyleNext}
            onClick={handleNext}
          />
          <Buttons
            buttonText="Forgot Password"
            className={styles.buttonStyleApple}
          />
          <span>
            Don't have an account?{" "}
            <Link className={styles.FooterRouter} to="/signup">
              {" "}
              Sign up
            </Link>
            .
          </span>
        </div>
      )}
    </Dialog>
  );
};

export default Login;
