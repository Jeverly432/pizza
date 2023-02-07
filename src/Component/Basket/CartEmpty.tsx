import React from "react";
import basketPizza from "../../Img/basketPizza.png";
import { NavLink } from "react-router-dom";
import './Basket.css'


const CartEmpty: React.FC = () => {
  return (
    <div className="basket-main-container">
      <div className="basket-container-more">
        <div className="baslke-main-container-three">
          <img alt="basketPizza" src={basketPizza} className="shop-main-container-img">

          </img>
        </div>
        <div className="basket-main-container-second">
          <div>The basket is empty</div>
        </div>
        <NavLink to="/shop" className="baslke-main-container-three-button">
          {"<"} Back
        </NavLink>
      </div>
    </div>
  );
};

export default CartEmpty;
