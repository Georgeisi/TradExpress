import React from "react";
import {} from "../styles/Section6.css";
import comment from "../Images/Union.png";
import quotes from "../Images/quotes.png";
import profilepic from "../Images/Ellipse 3.png";
import profilepic2 from "../Images/profilepic2.png";
import profilepic3 from "../Images/profilepic3.png";

const Section6 = () => {
  return (
    <div className="text-white">
      <h3 className="py-5">Customers Review</h3>
      <div className="bigdiv px-xl-5">
        <div className="position-relative pb-5 ps-2">
          <img className="position-absolue" src={comment} alt="" />
          <p className="position-absolute    cent  extrawidth">
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
          <img className="position-absolute bg-quotes" src={quotes} alt="" />
          <div className="d-flex roundpic ps-3 gap-2">
            <img src={profilepic} alt="" />
            <div className="pb-3 text-dark">
              <h4>Ireti</h4>
              <p>nigeria</p>
            </div>
          </div>
        </div>
        <div className="position-relative pb-5">
          <img className="position-absolue" src={comment} alt="" />
          <p className="position-absolute   cent  extrawidth">
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
          <img className="position-absolute bg-quotes" src={quotes} alt="" />
          <div className="d-flex roundpic ps-3  gap-2">
            <img src={profilepic2} alt="" />
            <div className="text-dark">
              <h4>Bayo</h4>
              <p>USA</p>
            </div>
          </div>
        </div>
        <div className="position-relative pe-2  ">
          <img className="position-absolue" src={comment} alt="" />
          <p className="position-absolute   cent  extrawidth">
            Trading on TradExpress mobile & web platforms has been a smooth
            experience for me quite easy to navigate.
          </p>
          <img className="position-absolute bg-quotes" src={quotes} alt="" />
          <div className="d-flex roundpic ps-3  gap-2">
            <img src={profilepic3} alt="" />
            <div className="text-dark">
              <h4>Olagoke</h4>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
