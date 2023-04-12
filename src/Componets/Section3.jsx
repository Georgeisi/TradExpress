import React, { useState } from "react";
import {} from "../styles/Pyment.css";
import Payment from "../Images/PaymentImage.png";
import FinalcialFreedom from "../Images/FinalcialFreedom.png";
import Investment from "../Images/Investment.png";

const Section3 = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="bg-gray ">
      <h3 className="pt-5">
        Why do people get involved with Cryptocurrencies?
      </h3>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className="text-purple text-decoration-none btn-dark  w-50 w-lg-25 mx-auto"
      >
        See Less
      </button>
      {isVisible && (
        <div>
          <div className="visible">
            <div className="container1 bg-light mx-auto mt-3 mb-5 ">
              <img src={Payment} className="pt-5 my-5" alt="" />
              <h2 text-h2>Easy Mode Of Payment</h2>
              <p className="p-2">
                People can now easily send and receive money from anywhere in
                the world to purchase goods and pay for services.
              </p>
            </div>

            <div className="container1 bg-light mx-auto mt-3 mb-5 ">
              <img src={FinalcialFreedom} className="pt-5 my-5" alt="" />
              <h2 text-h2>Financial Freedom</h2>
              <p className="p-2">
                Just like the internet no single entity controls the Crypto
                network which provides users transparency and privacy, which
                puts you in absolute control of your money.
              </p>
            </div>
            <div className="container1 bg-light mx-auto mt-3 mb-5 ">
              <img src={Investment} className="pt-5 my-5" alt="" />
              <h2 text-h2>Investment</h2>
              <p className="p-2">
                The constant demand as made Cryptocurrecies a Digital Gold used
                for alternative store of wealth on long term investments.
              </p>
            </div>
          </div>
          </div>
      )}
    </div>
  );
};

export default Section3;
