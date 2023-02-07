import React from "react";
import "./Basket.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearItems } from "../../redux/slices/cartSlice";
import CartEmpty from "./CartEmpty";
import { NavLink } from "react-router-dom";
import {RootState} from "../../redux/store"


const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state:RootState) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm("Are you sure want clear cart?")) {
      dispatch(clearItems());
    }
  };
  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="basket-main-container">
      <div className="basket-container-more"></div>
      <div className="basket-up-bar">
        <p className="basket-up-bar-basket">Basket</p>
        <div className="basket-up-bar-right">
          <div className="basket-up-bar-right-svg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-cart-x"
                viewBox="0 0 16 16"
              >
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
          </div>
          <div
            onClick={onClickClear}
            className="basket-up-bar-right-clear-basket"
          >
            Clear basket
          </div>
        </div>
      </div>
      <div className="basket-border-center"></div>
      <div className="basket-multi  ">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="basket-menu-under">
          <div>
            <div className="basket-menu-under-container-second">
              <div className="basket-menu-under-container-second-text">
                Total pizzas:
              </div>
              <div className="basket-menu-under-container-second-sum">
                {totalCount}
              </div>
            </div>
            <NavLink
              to="/shop"
              className="basket-menu-under-second-container-button"
            >
              {"<"} Back
            </NavLink>
          </div>
          <div>
            <div className="basket-menu-under-container-first">
              <div className="basket-menu-under-container-first-text">
                {" "}
                Order amount :{" "}
              </div>
              <div className="basket-menu-under-container-first-sum">
                {" "}
                {totalPrice}{" "}
              </div>
            </div>
            <button className="basket-menu-under-first-container-button">
              <p>Pay now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
