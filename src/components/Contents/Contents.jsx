import React from "react";
import "./Contents.css";

import {
  BsSearch,
  BsThreeDotsVertical,
  BsCurrencyBitcoin,
} from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiRipple } from "react-icons/si";

import validFile from "../../assets/valid-file Icon.png";
import btcGraph from "../../assets/btc-graph.png";
import ethGraph from "../../assets/eth-graph.png";
import ltcGraph from "../../assets/ltc-graph.png";
import graph from "../../assets/Graph.png";
import equalTo from "../../assets/eqaul-to.png";

const Contents = () => {
  const cards = [
    {
      name: "BTC",
      to: "Bitcoin to USD",
      graph: btcGraph,
      price: "$22,710",
      value: "30% of your portfolio",
      bgColor: "#FDF9E5",
      upBy: "+ 0.26%",
      upByBgColor: "#FBE591",
      upByColor: "#8B7F50",
      fontColor: "#8b7f50",
      toColor: "#C1AF6A",
    },
    {
      name: "ETH",
      to: "Etherium to USD",
      graph: ethGraph,
      price: "$39,479",
      value: "40% of your portfolio",
      bgColor: "#DAF7E8",
      upBy: "+ 0.26%",
      upByBgColor: "#A9D1BD",
      upByColor: "#5D9378",
      fontColor: "#8b7f50",
      toColor: "#83A393",
    },
    {
      name: "LTC",
      to: "Litecoin to USD",
      graph: ltcGraph,
      price: "$29,170",
      value: "30% of your portfolio",
      bgColor: "#FFE1E1",
      upBy: "+ 0.26%",
      upByBgColor: "#FFB6B6",
      upByColor: "#A26B6B",
      fontColor: "#8b7f50",
      toColor: "#B78181",
    },
  ];
  const swaps = [
    {
      to: "200 USDT",
      from: "0.62844 ETH",
      on: "6 minutes ago",
      value: "$9,252.20",
      id: 1,
    },
    {
      to: "200 USDT",
      from: "0.62844 ETH",
      on: "6 minutes ago",
      value: "$9,252.20",
      id: 3,
    },
    {
      to: "200 USDT",
      from: "0.62844 ETH",
      on: "6 minutes ago",
      value: "$9,252.20",
      id: 2,
    },
    {
      to: "200 USDT",
      from: "0.62844 ETH",
      on: "6 minutes ago",
      value: "$9,252.20",
      id: 4,
    },
  ];
  return (
    <div className="contents">
      <div className="header">
        <div className="search">
          <BsSearch className="search-icon" color={"#B0B3BF"} size={14} />
          <input
            className="search-bar"
            type="text"
            name="search"
            id="search"
            placeholder="SEARCH..."
          />
        </div>
        <div className="icons">
          <img src={validFile} alt="file" width="20px" height="20px" />
          <HiOutlineInbox size={20} />
          <BsThreeDotsVertical size={20} />
        </div>
        <div className="menus">
          <p className="wallet">Wallet</p>
          <p className="invoice">Invoice</p>
        </div>
      </div>
      <main className="content-data">
        <div className="crypto-card">
          {cards.map(
            ({
              name,
              to,
              graph,
              price,
              value,
              bgColor,
              upBy,
              upByBgColor,
              fontColor,
              upByColor,
              toColor,
            }) => (
              <div
                className="card"
                key={name}
                style={{ backgroundColor: bgColor }}
              >
                <div className="section-1">
                  <div className="name-up-by">
                    <p className="name" style={{ color: fontColor }}>
                      {name}
                    </p>
                    <p
                      className="up-by"
                      style={{ backgroundColor: upByBgColor, color: upByColor }}
                    >
                      {upBy}
                    </p>
                  </div>
                  <p className="to" style={{ color: toColor }}>
                    {to}
                  </p>
                </div>

                <div className="section-2 graph">
                  <img src={graph} alt="graph" />
                </div>
                <div className="section-3">
                  <p className="price">{price}</p>
                  <p className="value">{value}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="transaction-details">
          <div className="history">
            <div className="transaction-text">
              <p className="text">Transaction History</p>
              <div className="mouth-selector">
                <p className="month">6 Month</p>
                <RiArrowDropDownLine color={"#7C838F"} size={20} />
              </div>
            </div>
            <div className="transaction-in">
              <p className="transaction-in-text">Transaction In April 2021</p>
              <p className="price">$50,000</p>
            </div>
            <div className="graph">
              <img src={graph} alt="" />
            </div>
          </div>
          <div className="recent-swap">
            <div className="title">
              <p className="recent-swap-title">Recent Swaps</p>
              <p className="view-more">View more</p>
            </div>
            <div className="pair-value">
              <p className="pair-text">Pair</p>
              <p className="value-text">Value</p>
            </div>
            <div className="all-swaps">
              {swaps.map(({ to, from, on, value, id }) => (
                <div className="pair-value" key={id}>
                  <div className="pair">
                    <div className="swap-icon">
                      <div className="bitcoin coin">
                        <BsCurrencyBitcoin
                          className="coin-icon btc"
                          color={"#F4885A"}
                        />
                      </div>
                      <div className="ripple coin">
                        <SiRipple
                          className="coin-icon"
                          color={"#4C56C0"}
                          size={34}
                        />
                      </div>
                    </div>
                    <div className="swap-data">
                      <div className="to-from">
                        <p className="from">{from}</p>
                        <img
                          src={equalTo}
                          alt="equal"
                          width="16.08px"
                          height="6px"
                        />
                        <p className="to">{to}</p>
                      </div>
                      <p className="on">{on}</p>
                    </div>
                  </div>
                  <p className="value">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contents;
