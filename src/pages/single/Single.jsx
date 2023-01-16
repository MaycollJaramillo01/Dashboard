import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Chart from "../../component/chart/Chart"
import "./single.scss";
import List from "../../component/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="itemImg"
              />
           
            <div className="details">
              <h1 className="itemTitle">John Doe</h1>
              <div className="detailItem">
                <span className="itemKey">User:</span>
                <span className="itemValue">@JohnDoe_2023</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Phone: </span>
                <span className="itemValue">+1 589 659 621</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Address: </span>
                <span className="itemValue">Elton St. 256 Garden Yd. New York</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country: </span>
                <span className="itemValue">Canada</span>
              </div>
            </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={4/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Logins</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
