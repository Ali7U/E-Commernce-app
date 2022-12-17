import React from "react";
import { FaHamburger } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navList">
      <div className="page">
        <Link to={"/"}>
          <BsShopWindow />
        </Link>
      </div>
      <div className="page">
        <Link to={"/burgers"}>
          <FaHamburger />
        </Link>
      </div>
      <div className="page">
        <Link to={"/pizza"}>
          <GiFullPizza />
        </Link>
      </div>
      <div className="page">
        <Link to={"/juice"}>
          <BsCupStraw />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
