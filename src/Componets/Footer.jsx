import React from "react";
import {} from "../styles/Footer.css";
import logoss from "../Images/Group 215.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray  text-start mx-auto displaydiv">
        <div className=" text-al ">
          <ul className="product py-2">
            <h3 className="">Products</h3>
            <li>Bitcoin</li>
            <li>Alt</li>
            <li>Fiat</li>
            <li>Refil</li>
            <li>P2P</li>
          </ul>
        </div>
        <ul>
          <h3>Learn</h3>
          <li>Blog</li>
          <li>Help Center</li>
        </ul>
        <ul className="py-2">
          <h3>Contact</h3>
          <li>hello@tradexpress.com</li>
          <li>support@tradexpress.com</li>
          <img className="pt-2" src={logoss} alt="" />
        </ul>
        <ul>
          <h3>Company</h3>
          <li>About us</li>
          <li>Careers</li>
          <li>Roles</li>
          <li>Mobile</li>
        </ul>

        <ul>
          <h3>Legal</h3>
          <li>Priavacy Policy</li>
          <li>Anti-Money-Laundry</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className="bg-light">
        <p>&#169; 2021 TRADEEXPRESS TECHNOLOGIES ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
