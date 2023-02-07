import React, { useState } from "react";
import "../Shop/Shop.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/slices/cartSlice";
import {RootState} from "../../../redux/store"
const typeNames = ["thin", "traditional"];

type ComponentShopProps = {
  id: number;
  title: string;
  price: number;
  imageURL: string;
  sizes: number[];
  types: number[];
};

const ComponentShop: React.FC<ComponentShopProps> = ({
  id,
  title,
  price,
  imageURL,
  sizes,
  types,
}) => {
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiceSize] = useState<number>(0);
  const dispatch = useDispatch();
  const cartItem = useSelector((state:RootState) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageURL,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  let req = require(`../../../Img/${imageURL}.jpg`)

  return (
    <section className="shop-main-container-section-pizza-1">
      <img
      src={req}
        alt="pizza"
        className="shop-main-container-section-pizza-1-img"
      ></img>
      <div className="shop-main-container-section-pizza-1-name">{title}</div>
      <div className="shop-main-container-section-pizza-1-name-main-div">
        <ul className="shop-main-container-section-pizza-1-name-main-div-style">
          {types.map((type) => (
            <li
              key={type}
              onClick={() => setActiveType(type)}
              className={
                activeType === type
                  ? "shop-main-container-section-pizza-1-name-main-div-size-40"
                  : "shop-main-container-section-pizza-1-name-main-div-size-25"
              }
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul className="shop-main-container-section-pizza-1-name-main-div-size">
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiceSize(i)}
              className={
                activeSize === i
                  ? "shop-main-container-section-pizza-1-name-main-div-size-40"
                  : "shop-main-container-section-pizza-1-name-main-div-size-25"
              }
            >
              {size} cm
            </li>
          ))}
        </ul>
        <div className=""></div>
      </div>
      <div className="shop-main-container-section-pizza-1-name-price-container">
        <div className="shop-main-container-section-pizza-1-name-price-container-price">
          <div className="shop-main-container-section-pizza-1-name-price-container-price-second">
            from
          </div>
          <div className="shop-main-container-section-pizza-1-name-price-container-price-three">
            {price}
          </div>
        </div>
        <button
          onClick={onClickAdd}
          className="shop-main-container-section-pizza-1-name-price-container-add-to-cart"
        >
          <div>+ Add to cart</div>
          {addedCount > 0 && (
            <div className="shop-main-container-section-pizza-1-name-price-container-add-to-cart-state">
              {addedCount}
            </div>
          )}
        </button>
      </div>
    </section>
  );
};
export default ComponentShop;
