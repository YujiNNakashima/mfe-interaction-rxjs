import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
import { outputProcessEventSubject } from './hocs/useInteractionEvent'

export default function Header() {

  const [contextData, setContextData] = useState()

  useEffect(() => {
    outputProcessEventSubject.subscribe((evt) => {
      if(evt?.detail?.data.name === "wcapp:open-modal") {
        setContextData('wcapp:open-modal')
      }
    })
  }, [])

  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Fidget Spinne  r World</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to={{
            pathname: "/cart",
          }}
          >
            Cart
          </Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/wc">
            WCApp
          </Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login context={contextData} />
        </div>
      </div>
    </div>
  );
}
