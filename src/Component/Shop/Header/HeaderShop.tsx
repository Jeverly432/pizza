import React from "react";
import "../Header/HeaderShop.css";
import HeaderIconLeft from "../../../Img/HeaderIconLeft.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {RootState} from '../../../redux/store'

const Header:React.FC = () => {
  const { items, totalPrice } = useSelector((state:RootState) => state.cart);
  const totalCount = items.reduce((sum:number, item:any)=>sum + item.count, 0)

  return (
    <header className="header-container">
      <div className="headerrs">
        <img
          className="HeaderIconLeft"
          src={HeaderIconLeft}
          alt="HeaderIconLeft"
        ></img>
      </div>
      <nav className="header-nav-center">
        <NavLink to="/home" className="header-nav-center-navLink-shop">
          Home
        </NavLink>
        <NavLink to="/shop" className="header-nav-center-navLink-shop">
          Shop
        </NavLink>
        <NavLink  to="/" className="header-nav-center-navLink-shop">
          Contact
        </NavLink>
      </nav>
      <nav className="header-nav-right">
        
        <NavLink to="/basket" className="header-nav-right-img-basket-2">
          <div className="header-nav-right-navlink">
            <div className="header-nav-right-navlink-number">
              <div>{totalPrice} ₽</div>
            </div>
            <div className="header-nav-right-navlink-border"></div>
            <div>
              <div className="header-nav-right-navlink-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  className="bi-basket2"
                  viewBox="0 0 18 18"
                >
                  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                </svg>
                <div className="header-nav-right-navlink-right-number">
                  {totalCount}
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
