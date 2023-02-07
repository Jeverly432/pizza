import React from "react";
import HeaderShop from "./Header/HeaderShop";
import Shop from "./Shop/Shop";

const MainShop: React.FC = () => {
  return (
    <div className="main-shop-container">
      <HeaderShop />
      <Shop />
    </div>
  );
};

export default MainShop;
