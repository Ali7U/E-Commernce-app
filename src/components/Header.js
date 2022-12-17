import React from "react";
import { MdOutlineNoFood } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header(props) {
  const {countCart} = props
  return (
    <nav>
      <div className="icon">
        <MdOutlineNoFood />
      </div>

      <div className="list">
        <ul>
          <Link to={"/"}>Home</Link>
          {/* <Link to='/'>about</Link> */}
          <Link to={"/cart"} className="iconCart">
           
            {countCart ? (
              <button className="btn">{countCart}</button>
            ) : (
              ""
            )}
            <AiOutlineShoppingCart />
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
