import React from "react";
import Navbar from "../navbar/Navbar";
import "./widget.scss";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <Person2OutlinedIcon className="icon" style={{color:"white", backgroundColor:"#49BCF6"}} />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{color:"white", backgroundColor:"red"}}  />,
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" style={{color:"white", backgroundColor:"lime"}} />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color:"white", backgroundColor:"orange"}} />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentaje positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
       {data.icon}
      </div>
    </div>
  );
};

export default Widget;
