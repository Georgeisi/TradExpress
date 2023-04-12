import React from 'react'
import {useState} from 'react'
import Buy from '../Componets/Buy';
import Sell from '../Componets/Sell';
import '../styles/Mainbuysell.css'


const BuySell = () => {
  
    const [active, setActive] = useState("buy");
    const [buy, setBuy] = useState(true)
  
  return (
    <div>
            <div className="indi mx-auto mt-5">
        <h2>Buy/Sell Instantly</h2>
        <div className="btn22">
          <button
            onClick={() => {
              setActive("buy");
              setBuy(true)
            }}
            className={active === "buy" ? "active" : ""}
          >
            Buy
          </button>
          <button
            onClick={() => {
              setActive("sell");
              setBuy(false)
            }}
            className={active === "sell" ? "active" : ""}
          >
            Sell
          </button>
        </div>
      </div>
      {buy===true?<Buy />:<Sell/>}

    </div>
  )
}

export default BuySell