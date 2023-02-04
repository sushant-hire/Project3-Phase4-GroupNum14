// import React, { useState } from "react";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import FavoriteIcon from "@mui/icons-material/Favorite";

// const IconFunctionality = () => {
//   const [color, setColor] = useState(<FavoriteBorderIcon />);
//   const [isFavorited, setIsFavorited] = useState(false);

//   const handleClick = () => {
//     setColor(<FavoriteIcon style={{ color: "red" }} />);
//     setIsFavorited(!isFavorited);
//   };
//   return (
//     <span onClick={handleClick}>
//       {isFavorited ? (
//         <FavoriteIcon style={{ color: "red" }} />
//       ) : (
//         <FavoriteBorderIcon />
//       )}
//     </span>
//   );
// };

// export default IconFunctionality;

import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from './IconFunctionality.module.css'

const IconFunctionality = () => {
  const [color, setColor] = useState(<FavoriteBorderIcon />);
  const [isFavorited, setIsFavorited] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setColor(<FavoriteIcon style={{ color: "red" }} />);
    setIsFavorited(!isFavorited);
    setCounter(counter === 0 ? 1 : 0);
  };
  return (
    <div onClick={handleClick} style={{display:"flex", alignItems: 'center', gap: '0.3rem'}} >
      {isFavorited ? (
        <FavoriteIcon style={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
      <p className={styles.CounterParaStyle}>{counter === 0 ? "" : "1"}</p>
    </div>
  );
};

export default IconFunctionality;