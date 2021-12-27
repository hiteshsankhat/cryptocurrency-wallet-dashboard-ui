import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import { IoMdSpeedometer } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BsWallet2, BsHandbag, BsBasket } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <div className="menu-item home">
          <IoMdSpeedometer size={30} color={"#9A9FAD"} />
          <p>Home</p>
        </div>
        <div className="menu-item account">
          <AiOutlineUser size={30} color={"#9A9FAD"} />
          <p>Account</p>
        </div>
        <div className="menu-item wallets">
          <BsWallet2 size={30} color={"#9A9FAD"} />
          <p>Wallets</p>
        </div>
        <div className="menu-item buy-sell">
          <BsHandbag size={30} color={"#9A9FAD"} />
          <p>Buy/Sell</p>
        </div>
        <div className="menu-item markets">
          <BsBasket size={30} color={"#9A9FAD"} />
          <p>Markets</p>
        </div>
        <div className="menu-item settings">
          <FiSettings size={30} color={"#9A9FAD"} />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
