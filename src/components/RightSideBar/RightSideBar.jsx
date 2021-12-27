import React from "react";
import "./RightSideBar.css";
import userAvatar from "../../assets/Avatar.png";
import medal from "../../assets/medal.png";
import stat1 from "../../assets/stat1.png";
import stat2 from "../../assets/stat2.png";
import stat3 from "../../assets/stat3.png";

const RightSideBar = () => {
  const stats = [
    {
      img: stat1,
      type: "TOTAL NET WORTH",
      value: "$51,250",
      id: 1,
    },
    {
      img: stat2,
      type: "TOTAL EARNINGS",
      value: "$10,596",
      id: 2,
    },
    {
      img: stat3,
      type: "HARVESTED LOSSES",
      value: "$0.00",
      id: 3,
    },
  ];
  return (
    <div className="right-sidebar">
      <div className="user-info">
        <p>Hi, Sam</p>
        <img src={userAvatar} />
      </div>
      <div className="stat-details total-mined">
        <div className="stat-icon">
          <img src={medal} alt="medal" />
        </div>
        <div className="stat-data">
          <p className="stat-type">Total Mined</p>
          <p className="stat-value">$5,596</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="stat-container">
        {stats.map(({ img, type, value, id }) => (
          <div className="stat-details" key={id}>
            <div className="stat-icon">
              <img src={img} alt="stat1" />
            </div>
            <div className="stat-data">
              <p className="stat-type">{type}</p>
              <p className="stat-value">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="swap">Create a Swap</button>
      <p className="yield-info">
        Our high-yield account built to help you earn more on every dollar you
        save
      </p>
    </div>
  );
};

export default RightSideBar;
