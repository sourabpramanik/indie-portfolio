import React from "react";
import Link from "next/link";
import { useGlobalDispatchContext } from "../context/globalContext";

function Header() {
  const dispatch = useGlobalDispatchContext();

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <a
          href="/"
          onMouseEnter={() => dispatch("hovered")}
          onMouseLeave={dispatch}
          className="logo__wrapper"
        >
          INDIE.
        </a>
        <div
          className="menu__wrapper"
          onMouseEnter={() => dispatch("hovered")}
          onMouseLeave={dispatch}
        ></div>
      </div>
    </div>
  );
}
export default Header;
