import React from "react";
import "./Basket.css";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";

type CartItemProprs = {
  id:number,
  title:string,
  price:number,
  imageURL:string,
  type: number,
  size: number,
  count: number
};

const CartItem: React.FC<CartItemProprs> = ({
  id,
  title,
  type,
  size,
  price,
  count,
  imageURL,
}) => {
  let req = require(`../../Img/${imageURL}.jpg`)
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Are you sure want to remove?")) {
      dispatch(removeItem(id));
    }
  };
  return (
    <section className="basket-menu">
      <div className="basket-menu-section-second">
        <div className="basket-menu-section-left">
          <img
            src={req}
            className="basket-menu-pizza-img"
            alt="pizza"
          ></img>
          <div className="basket-menu-container-text">
            <p className="basket-menu-container-text-name">{title}</p>
            <div className="basket-menu-container-text-deep">
              <p className="basket-menu-container-text-deep-p1">{type},</p>

              <div className="basket-menu-container-text-deep-p2">
                <div>{size} </div>
                <div className="basket-menu-container-text-deep-p2-cm">
                  cm
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="basket-menu-section-none">
          <div className="basket-menu-section-second">
            <div
              onClick={onClickMinus}
              className="basket-menu-section-second-minus"
            >
              -
            </div>
            <div className="basket-menu-section-second-center">{count}</div>
            <div
              onClick={onClickPlus}
              className="basket-menu-section-second-plus"
            >
              <p className="basket-menu-section-second-plus-p">+</p>
            </div>
          </div>
          <div className="basket-menu-price">{price}</div>
          <div onClick={onClickRemove} className="basket-menu-delete">
            X
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
