import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={styles.SearchBoxContainer}>
      <SearchIcon />
      <input
        className={styles.InputFieldContainer}
        placeholder="Search Twitter"
      ></input>
    </div>
  );
};

export default SearchBox;