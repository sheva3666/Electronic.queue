import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <a href="">
        <img src="" alt="" />
      </a>
      <Link className="header__logo" to={"/"}>
        <h6>NICE LOGO</h6>
      </Link>
    </div>
  );
};

export default Header;
