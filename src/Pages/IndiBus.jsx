import React, { useState } from "react";
import {} from "../styles/indibus.css";
import Indi from "../Componets/Indi";
import Bus from "../Componets/Bus";
import { isVisible } from "@testing-library/user-event/dist/utils";

const IndiBus = () => {
  const [active, setActive] = useState("bus");
  const [isvisible, setisvisible] = useState(true);
  // let isActive = () => {
  //   setActive(false);
  // };

  return (
    <div className="indi-bus py-5 px-3 ">
      <div className="indi-bus-inner">
        <div className="bg-gray  mx-auto px-4">
          <h3 className="pt-3">WELCOME</h3>
          <div className="btn1">
            <button
              onClick={() => {
                setActive("indi");
                setisvisible(true);
              }}
              className={active === "indi" ? "active" : ""}
            >
              Individual
            </button>
            <button
              onClick={() => {
                setActive("bus");
                setisvisible(false);
              }}
              className={active === "bus" ? "active" : ""}
            >
              Business
            </button>
          </div>
          {isvisible === true ? <Indi /> : <Bus />}
        </div>
      </div>
    </div>
    // <div className="pb-5 mx-auto">
    //   {active && (
    //     <div className="bg-gray w-75 mx-auto contain1">
    //       <h3 className="p-3">WELCOME</h3>
    //       <form action="">
    //         <div className="pt-5">
    //           <button
    //             onClick={() => {
    //             setActive(true)
    //             }}
    //             className="indibus indibus2 w-25"
    //           >
    //             Individual
    //           </button>
    //           <button
    //             onClick={() => {
    //             setActive(false)

    //             }}
    //             className="w-25 indibus"
    //           >
    //             Business
    //           </button>
    //         </div>

    //         <div className="pb-3">
    //           <input className="w-75 p-3" placeholder="Full Name" type="text" />
    //         </div>
    //         <div className="pb-3">
    //           <input className="w-75 p-3" placeholder="Email" type="text" />
    //         </div>
    //         <div className="pb-3">
    //           <input
    //             className="w-75 p-3"
    //             placeholder="Phone Nmber"
    //             type="text"
    //           />
    //         </div>
    //         <div className="pb-3">
    //           <input
    //             className="w-75 p-3"
    //             placeholder="Referal Code (Optional)"
    //             type="text"
    //           />
    //         </div>
    //       </form>
    //       <p>
    //         By clicking the Sign Up button below, you agree to TradExpress{" "}
    //         <a href=""> terms and service</a> Sign Up
    //       </p>
    //       <button
    //      className="signup pb-3">Sign up</button>
    //       <p>
    //         Already have an Account? <a href="">Click here</a>
    //       </p>
    //     </div>
    //   )}
    //   {!active && (
    //     <div className="bg-gray w-75 mx-auto contain1">
    //       <h3 className="p-3">WELCOME</h3>
    //       <form action="">
    //         <div className="pt-5">
    //           <button onClick={()=>{
    //             setActive(true)
    //           }} className="indibus indibus2 w-25">Individual</button>
    //           <button onClick={()=>{
    //             setActive(false)
    //           }} className="w-25 indibus">Business</button>
    //         </div>
    //         <div className="py-3">
    //           <input className="w-75 p-3" placeholder="USERNAME" type="text" />
    //         </div>
    //         <div className="pb-3">
    //           <input
    //             className="w-75 p-3"
    //             placeholder="Bussiness Name"
    //             type="text"
    //           />
    //         </div>
    //         <div className="pb-3">
    //           <input className="w-75 p-3" placeholder="Email" type="text" />
    //         </div>
    //         <div className="pb-3">
    //           <input
    //             className="w-75 p-3"
    //             placeholder="Phone Nmber"
    //             type="text"
    //           />
    //         </div>
    //         <div className="pb-3">
    //           <input
    //             className="w-75 p-3"
    //             placeholder="Referal Code (Optional)"
    //             type="text"
    //           />
    //         </div>
    //       </form>
    //       <p>
    //         By clicking the Sign Up button below, you agree to TradExpress{" "}
    //         <a href=""> terms and service</a> Sign Up
    //       </p>
    //       <button className="signup pb-3">Sign up</button>
    //       <p>
    //         Already have an Account? <a href="">Click here</a>
    //       </p>
    //     </div>
    //   )}
    // </div>
  );
};

export default IndiBus;
