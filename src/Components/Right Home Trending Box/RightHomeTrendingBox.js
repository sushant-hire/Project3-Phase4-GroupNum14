import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./RightHomeTrendingBox.module.css";
import RightMoreButtonPopover from "../../Molecules/Right More Button Popover/RightMoreButtonPopover";

const trendinsData = [
  {
    title1: "Trending in India",
    title2: "#Corruption 💸",
    title3: "Trending with #AchheDin",
    isNotInterested: false,
    id: 1,
  },
  {
    title1: "Trending in Vidarbha",
    title2: "#WaterNotComing 💧",
    title3: "Trending with #Drought",
    isNotInterested: false,
    id: 2,
  },
  {
    title1: "Trending in Jharkhand",
    title2: "#MahuaAddictionGoneBad 🍺",
    title3: "Trending with #HemantSoren",
    isNotInterested: false,
    id: 3,
  },
  {
    title1: "Trending in Hyderabad",
    title2: "#KauvvaBiryaani 🐧",
    title3: "Trending with #VijayRaaz",
    isNotInterested: false,
    id: 4,
  },
  {
    title1: "Trending in Bihar",
    title2: "#BoycottExams 📋",
    title3: "Trending with #LaluJiYadav",
    isNotInterested: false,
    id: 5,
  },
]


const RightHomeTrendingBox = () => {
  const [trending , setTrendings] = useState(trendinsData.slice(0,2))
  const [isShowingAllTrendings , setIsShowingAllTrendings] = useState(false)

  function handleRequestSeeAll () {
    setIsShowingAllTrendings(!isShowingAllTrendings)
    if(isShowingAllTrendings) {
       return setTrendings(trendinsData.slice(0,2))
    }
    setTrendings(trendinsData)
}


  function updateIsNotInterested(id, value) {
    const updatedData = trending.map((data) => {
      if (data.id === id) {
        return { ...data, isNotInterested: value };
      }
      return data;
    });
    setTrendings(updatedData);
  }

  return (
    <div className={styles.TrendingBoxMainContainer}>
      <h3 className={styles.TrendingBoxHeadingContainer}>What's happening?</h3>
      {trending.map(
        (button) =>
          !button.isNotInterested && (
            <button
              key={button.id}
              className={styles.TrendingBoxButtonContainer}
            >
              <div className={styles.TrendingBox}>
                <div> {button.title1}</div>
                <div style={{ fontWeight: "bold" }}> {button.title2}</div>
                <div> {button.title3}</div>
              </div>
              <RightMoreButtonPopover
                updateIsNotInterested={updateIsNotInterested}
                id={button.id}
              />
            </button>
          )
      )}
      <p className={styles.TrendingBoxShowMoreContainer} onClick = {handleRequestSeeAll}  >{isShowingAllTrendings ? 'Show Less' : 'Show More'} </p>
    </div>
  );
};

export default RightHomeTrendingBox;