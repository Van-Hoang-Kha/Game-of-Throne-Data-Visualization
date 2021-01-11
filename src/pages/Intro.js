import React from "react";
import Logo from "../images/logo.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro__div">
      <div className="intro__background__filter"></div>
      <div className="intro__div__logo">
        <img className="logo__image" src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Intro;
