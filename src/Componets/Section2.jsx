import React, { useEffect, useState } from "react";
import {} from "../styles/Section2.css";
import Arrow1 from "../Images/Arrow1.png";
import Arrow2 from "../Images/Arrow2.png";
import Loading from "./Loading";

const Section2 = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let getData = async () => {
    let res = await fetch(
      "https://api.coinlore.net/api/tickers/?start=0&limit=5"
    );
    let finalData = await res.json();
    setIsLoading(false);
    console.log(finalData);

    setData(finalData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
         <div className="bg-gray d-flex border-b1 w-100   ">
         <marquee behavior="scroll" direction="left">
            <div className="border-b1">
              <div className="gridDiv w-50 newborder ">
                <p>BTC/USD</p>
                <p className=" border-right">
                  {data.data[0].percent_change_24h} <img src={Arrow2} alt="" />
                </p>
                <p className="ps-3 pt-3">{data.data[0].price_usd}USD</p>
              </div>
              <div className="gridDiv w-50 newborder ">
                <p>ETH/USD</p>
                <p className="border-right">
                  {data.data[1].percent_change_24h} <img src={Arrow1} alt="" />
                </p>
                <p className="pt-3">{data.data[1].price_usd}USD</p>
              </div>
              <div className="gridDiv w-50 newborder ">
                <p>USDT/USD</p>
                <p className=" border-right">
                  {data.data[2].percent_change_24h} <img src={Arrow2} alt="" />
                </p>
                <p className="ps-3 pt-3">{data.data[2].price_usd}USD</p>
              </div>
              <div className="gridDiv w-50 newborder ">
                <p>BNB/USD</p>
                <p className="border-right">
                  {data.data[3].percent_change_24h} <img src={Arrow1} alt="" />
                </p>
                <p className="pt-3">{data.data[3].price_usd}USD</p>
              </div>
              <div className="gridDiv w-50 newborder ">
                <p>USDC/USD</p>
                <p className="border-right">
                  {data.data[4].percent_change_24h} <img src={Arrow1} alt="" />
                </p>
                <p className="pt-3">{data.data[4].price_usd}USD</p>
              </div>
            </div>
         </marquee>
          </div>
        </>
      )}
    </>
  );
};

export default Section2;
