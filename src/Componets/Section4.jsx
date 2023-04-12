import React from "react";
import {} from "../styles/Section4.css";
import ProfilePic from "../Images/Profile.png";
import piggy from "../Images/piggy.png";
import crypto from "../Images/Btc.png";
import one from "../Images/emojione-monotone_keycap-1.png";
import two from "../Images/emojione-monotone_keycap-2.png";
import three from "../Images/emojione-monotone_keycap-3.png";

const Section4 = () => {
  return (
    <div>
      <h3 className="pt-3">
        Buy and Sell your Cryptocurrency in 3 simple steps
      </h3>
      <p className="w-75 mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
        reprehenderit! Obcaecati magnam a at amet vel, quos facilis perferendis
        assumenda sapiente, dolor velit veniam autem officiis, id aliquid saepe
        explicabo.
      </p>

      <div className="w-75 mx-auto buysell pt-5">
        <img src={ProfilePic} alt="" />
        <div className="">
          <h3>
            <img src={one} alt="" /> Create Free Account
          </h3>
          <p>
            Sign up for your free TradExpress Wallet on web, iOS, or Android
            devices and follow our easy process to set up your profile. Deposit
          </p>
        </div>
      </div>
      <div className="w-75 mx-auto buysell buysell2 pt-5">
        <img src={piggy} alt="" />
        <div>
          <h3>
            <img src={two} alt="" /> Deposit
          </h3>
          <p>
            Choose your preferred deposit option like bank transfer,
            credit/debit card or send digital asset directly to your wallet for
            easy funding/withdrawal.
          </p>
        </div>
      </div>
      <div className="w-75 mx-auto buysell pt-5">
        <img src={crypto} alt="" />
        <div>
          <h3>
            <img src={three} alt="" /> Buy/Sell Crypto
          </h3>
          <p>
            Sign up for your free TradExpress Wallet on web, iOS, or Android
            devices and follow our easy process to set up your profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
