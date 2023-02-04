import React from "react";
import styles from "./Home.module.css";
import LeftHomeSection from "../../Sections/Left Home Section/LeftHomeSection";
import MiddleHomeSection from "../../Sections/Middle Home Section/MiddleHomeSection";
import RightHomeSection from "../../Sections/Right Home Section/RightHomeSection";
import { loginAtom } from "./../../Recoil State/Login Page State/LoginAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [islogin, setIsLogin] = useRecoilState(loginAtom);
  console.log();
  useEffect(() => {
    if (islogin === false) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.ParentHomeContainer}>
      <LeftHomeSection />
      <MiddleHomeSection />
      <RightHomeSection />
    </div>
  );
};

export default Home;
