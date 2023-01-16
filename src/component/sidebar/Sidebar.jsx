import React from "react";
import "./sidebar.scss";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
       
        <span className="logo">George R</span>
        </Link>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <li>
            <DashboardIcon   className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
        
         <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            <Person3OutlinedIcon   className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <Inventory2OutlinedIcon   className="icon"/>
            <span>Products</span>
          </li>
          </Link>

          <li>
            <NoteAltOutlinedIcon  className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon  className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
         
            <DonutLargeOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NoteAltOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon  className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon  className="icon"/>
            <span>Log</span>
          </li>
          <li>
            <SettingsOutlinedIcon  className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon  className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon  className="icon"/>

            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
      
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
