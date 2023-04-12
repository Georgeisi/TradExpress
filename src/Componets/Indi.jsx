import React from "react";
import {Link} from 'react-router-dom'

const Indi = () => {
  return (
    <div className="">
      <div className=" div1">
        <form action="" className=" main bg-gray w-100 mx-auto">
          <div className="py-3">
            <input className="w-100 p-3" placeholder="USERNAME" type="text" />
          </div>
          <div className="py-3">
            <input className="w-100 p-3" placeholder="Full Name" type="text" />
          </div>
          <div className="py-3">
            <input className="w-100 p-3" placeholder="Email" type="text" />
          </div>
          <div className="py-3">
            <input className="w-100 p-3" placeholder="Phone Number" type="text" />
          </div>
          <div className="py-3">
            <input className="w-100 p-3" placeholder="Referal Code" type="text" />
          </div>
        <p>
          By clicking the Sign Up button below, you agree to TradExpress{" "}
          <a href=""> terms and service</a> Sign Up
        </p>
        <Link
              className=" text-decoration-none btn bgcolor w-50 mx-auto text-white"
              to="/indi-bus"
            >
              Sign Up
            </Link>
          <p className="pt-3">
            Already have an Account? <a href="">Click here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Indi;
