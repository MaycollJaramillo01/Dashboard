import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "./featured.scss";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlined from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={80} text={"80%"} strokeWidth={5} />
        </div>
        <p className="title">Total Users Trafic Today</p>
        <p className="amount">580</p>
        <p className="desc">
          Previous logins processing. Last logins may not be included
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Today</div>
            <div className="itemResult  negative">
                <KeyboardArrowDownOutlined fontSize="small"/>
              <div className="resultAmount" style={{textAlign:"center"}}>725</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
                <KeyboardArrowUpOutlined  fontSize="small"/>
              <div className="resultAmount " style={{textAlign:"center"}}>725</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
                <KeyboardArrowUpOutlined   fontSize="small"/>
              <div className="resultAmount" style={{textAlign:"center"}}>725</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
