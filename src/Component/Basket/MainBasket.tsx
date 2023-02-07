import React from "react";
import HeaderShop from "../Shop/Header/HeaderShop";
import Basket from "./Basket";
import "./Basket.css";

const MainBasket: React.FC = () => {
  return (
    <div className="main-basket-container">
      <HeaderShop />
      <Basket />
    </div>
  );
};

export default MainBasket;
