import React from "react";
import SearchBox from "../../Molecules/Search Box/SearchBox";
import RightHomeTrendingBox from "../../Components/Right Home Trending Box/RightHomeTrendingBox";
import RightHomeFollowBox from "../../Components/Right Home Follow Box/RightHomeFollowBox";
import RightHomeFooter from "../../Molecules/Right Home Footer/RightHomeFooter";
import styles from "./RightHomeSection.module.css";

const RightHomeSection = () => {
  return (
    <div>
      <SearchBox />
      <RightHomeTrendingBox />
      <RightHomeFollowBox />
      <RightHomeFooter />
    </div>
  );
};

export default RightHomeSection;
