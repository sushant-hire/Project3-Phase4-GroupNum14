import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import Buttons from "../../Molecules/Buttons/Buttons";
import AppleIcon from "@mui/icons-material/Apple";
import { FcGoogle } from "react-icons/fc";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [open] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [step1, setStep1] = useState(false);
  const Nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [message, setMessage] = useState("");
  const [pwmessage, setPwMessage] = useState("");
  const [uMes, setUMes] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [monthSet, setMonthSet] = useState("");
  const [yearSet, setYearSet] = useState("");
  const [dateSet, setDateSet] = useState("");
  const [number, setNumber] = useState("");
  const [mesNumber, setMesNumber] = useState("");
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(true);

  // const [date,setDate]
  function captureemail(e) {
    setEmail(e.target.value);
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // if (regEx.test(email)) {
    //   setMessage("Email is Valid");
    // } else
    if (!regEx.test(email) && email !== " ") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  }
  function capturepass(e) {
    setpassword(e.target.value);
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

    // if (pwRegEx.test(password)) {
    //   setPwMessage("pw is Valid");
    // } else
    if (!pwRegEx.test(password) && password !== " ") {
      setPwMessage("Password is Not Valid");
    } else {
      setPwMessage("");
    }
  }
  function captureNumber(e) {
    setNumber(e.target.value);
    const numRegx = /^\+?[1-9][0-9]{10,12}$/;
    if (!numRegx.test(number) && number !== " ") {
      setMesNumber("Number is not valid");
    } else {
      setMesNumber("");
    }
  }

  function captureuser(e) {
    setusername(e.target.value);
    const userRegEx = /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/;

    // if (userRegEx.test(username)) {
    //   setUMes("userName is Valid");
    // } else
    if (!userRegEx.test(username) && username !== " ") {
      setUMes("userName is Not Valid");
    } else {
      setUMes("");
    }
  }
  function submit(event) {
    event.preventDefault();
    if (email === "" || username === "" || password === "" || number === "") {
      alert("Please enter something");
    } else if (
      message === "Email is Not Valid" ||
      pwmessage === "Password is Not Valid" ||
      uMes === "userName is Not Valid"
    ) {
      alert("you have enter wrong details");
    } else {
      console.log(monthSet, "iam slected month");
      console.log(yearSet, "selected year");
      console.log(dateSet, "selected date");

      const newUser = {
        Email: email,
        Username: username,
        Password: password,
        Number: number,
        Date: dateSet,
        Month: monthSet,
        Year: yearSet,
      };
      data.push(newUser);
      setData([...data]);

      console.log(data, "i am correct data");

      if (show === true) {
        setShow(false);
      } else {
        setShow(true);
        alert("Congratulations! You have successfully signed up!");
        Nav("/");
      }
    }
    localStorage.setItem("list", JSON.stringify(data));
    setEmail("");
    setMessage("");
    setpassword("");
    setPwMessage("");
    setUMes("");
    setusername("");
    setDateSet("");
    setMonthSet("");
    setYearSet("");
    setNumber("");
    setMesNumber("");
    // alert("Congratulations! You have successfully signed up!");
    // Nav("/");
  }

  function HandleStep1() {
    setStep1(true);
  }

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
    2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
    1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988,
    1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979,
  ];
  let date = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  function MonthHandle(e) {
    console.log(e.target.value);
    setMonthSet(e.target.value);
  }
  function yearHandle(e) {
    console.log(e.target.value);
    setYearSet(e.target.value);
  }
  function dateHandle(e) {
    console.log(e.target.value);
    setDateSet(e.target.value);
  }

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          style: {
            borderRadius: "15px",
          },
        }}
      >
        {step1 ? (
          <>
            <div className={styles.newDialogContainer}>
              <DialogTitle
                className={styles.dialogHeading}
                id="responsive-dialog-title"
              >
                <span
                  style={{
                    fontSize: "2vw",
                    fontWeight: "bolder",
                  }}
                >
                  {"Create your account"}
                </span>
              </DialogTitle>
              <div style={{ position: "relative", bottom: "1rem" }}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={captureuser}
                  required
                />
                {/* <span style={{ color: "red" }}>{uMes}</span> */}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={captureemail}
                  required
                />
                {/* <span style={{ color: "red" }}>{message}</span> */}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={number}
                  onChange={captureNumber}
                  required
                />
                {/* <span style={{ color: "red" }}>{pwmessage}</span>
                <span style={{ color: "red" }}>{message}</span> */}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={capturepass}
                  required
                />
                {/* <span style={{ color: "red" }}>{pwmessage}</span> */}
              </div>
              <h4
                style={{
                  position: "relative",
                  bottom: "0.7rem",
                }}
              >
                Date of birth
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "5.4rem",
                  marginRight: "5.4rem",
                  position: "relative",
                  bottom: "2rem",
                }}
              >
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.{" "}
              </p>

              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  bottom: "1.8rem",
                }}
                className={styles.dateofbirth}
              >
                <select
                  style={{
                    width: "19vh",
                    height: "3.5rem",
                    margin: "0.5rem",
                    fontSize: "1rem",
                    textAlign: "left",
                  }}
                  onChange={MonthHandle}
                >
                  <option>Month</option>
                  {month.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>

                <select
                  style={{
                    width: "15vh",
                    height: "3.5rem",
                    margin: "0.5rem",
                    fontSize: "1rem",
                    textAlign: "left",
                  }}
                  onChange={yearHandle}
                >
                  <option>Year</option>
                  {year.map((element, index) => (
                    <option key={index}>{element}</option>
                  ))}
                </select>
                <select
                  style={{
                    width: "15vh",
                    height: "3.5rem",
                    margin: "0.5rem",
                    fontSize: "1rem",
                    textAlign: "left",
                  }}
                  onChange={dateHandle}
                >
                  <option>Date</option>
                  {date.map((element, index) => (
                    <option key={index}>{element}</option>
                  ))}
                </select>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                bottom: "40px",
              }}
            >
              <Buttons
                className={styles.buttonStyleSubmit}
                buttonText="Submit"
                onClick={submit}
              />
            </div>
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
                {"Join Twitter today"}
              </span>
            </DialogTitle>
            <Buttons
              startIcon={<FcGoogle style={{ fontSize: '1.35rem', marginRight: "0.5rem" }} />}
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
            <Buttons
              buttonText="Sign up with phone or email"
              onClick={HandleStep1}
              className={styles.buttonStyleSignUp}
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "12.3px",
                marginLeft: "9.5rem",
                marginRight: "9.5rem",
              }}
            >
              By signing up, you agree to the{" "}
              <span className={styles.TermsDecoration}>Terms of Service</span>{" "}
              and <span className={styles.TermsDecoration}>Privacy Policy</span>
              , including{" "}
              <span className={styles.TermsDecoration}>Cookie Use</span>.
            </p>
            <span>
              Have an account already?{" "}
              <Link className={styles.FooterRouter} to="/">
                {" "}
                Login
              </Link>
              .
            </span>
          </div>
        )}
      </Dialog>
    </>
  );
};

export default SignUp;
