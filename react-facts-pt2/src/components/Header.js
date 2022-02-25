import React from "react";
import logo from "./react-logo.png";

export default function Header() {
  return (
    <div>
      <nav className="nav">
        {" "}
        <img src={logo} className="nav-logo" />
      </nav>
    </div>
  );
}
