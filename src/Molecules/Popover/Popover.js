import React from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import style from "./Popover.module.css";
import { loginAtom } from "../../Recoil State/Login Page State/LoginAtom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const PopoverFunc = () => {
  let userName = JSON.parse(localStorage.getItem("list"));
  const [loginStatus, setLoginStatus] = useRecoilState(loginAtom);
  const Nav = useNavigate();
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={style.btn} {...bindTrigger(popupState)}>
            <img
              src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
              alt=""
              className={style.photo}
            />{" "}
            <span style={{ marginLeft: "0.5rem" }}>
              Sushant Hire{" "}
              <span style={{ fontWeight: "normal" }}>
                @{userName[0].Username}
              </span>
            </span>{" "}
            <MoreHorizOutlinedIcon style={{ marginLeft: "1rem" }} />
          </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography className={style.PopoverOptions} sx={{ p: 2 }}>
              Add an existing account
            </Typography>
            <Typography
              className={style.PopoverOptions}
              sx={{ p: 2 }}
              onClick={() => {
                setLoginStatus(false);
                Nav("/");
              }}
            >
              Log out{" "}
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default PopoverFunc;
