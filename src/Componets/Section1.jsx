import React from "react";
import {} from "../styles/Section1.css";
import { Link } from "react-router-dom";
import Logo1 from "../Images/DownloadLogo.png";
import Rings from "../Images/Two-rings.png";

const Section1 = () => {
  return (
    <div className="bg-purple position-relative text-white ">
      <img
        src={Rings}
        className="w-sm-100 w-75 position-absolute w-75 w-lg-50 psimg ring"
        alt=""
      />

      <div className="mediaDiv ">
        <h1 className="pt-5 header1 padding1">
          Buy, sell and manage your Crypto on TradExpress.
        </h1>
        <p className="padding1">
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.
        </p>
        <div>
          <button
            className=" text-decoration-none btn btn-white bg-white w-50 mx-auto text-purple my-3"
            to="/indi-bus"
          >
            Get Started
          </button>
          <img className="pt-5 pe-5 pb-5" src={Logo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
