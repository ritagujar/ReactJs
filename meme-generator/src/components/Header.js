import React from "react";
import memeLogo from "../images/meme-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="meme-logo" src={memeLogo} alt="" />
      <h2 className="header-heading">Meme Generator</h2>
    </div>
  );
};

export default Header;
