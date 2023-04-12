import React from "react";
import {} from "../styles/Section5.css";
import { Link } from "react-router-dom";
import Logo from "../Images/DownloadLogo.png";

const Section5 = () => {
  return (
    <div className="bg-gray mx-auto w-100">
      <p className="smalltext">
        Ready to Buy/Sell cryptocurrencies in just 10 minutes
      </p>
      <h4 className="semismall">Create Account For Free And Start Trading</h4>
      <div className="con">
        <Link to={"/indi-bus"}>
          <button className=" text-decoration-none btn btn-dark  button1 w-50 mx-auto text-white my-3">
            Get Started
          </button>
        </Link>
        <img className="w-25 mx-auto pb-5" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Section5;
