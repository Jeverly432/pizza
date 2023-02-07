import React from "react";
import "./Aside.css";
import pizzaMenu2 from "../../../Img/pizzaMenu2.png";
import pizzaMenu1 from "../../../Img/pizzaMenu1.png";
import pizzaMenu3 from "../../../Img/pizzaMenu3.png";
import center from "../../../Img/center.png";

const Aside: React.FC = () => {
  return (
    <aside className="aside-container">
      <div className="article-container-second-big-img-pizza">
        <img
          src={center}
          className="article-container-big-img-pizza"
          alt="pizzaOutline"
        ></img>
      </div>
      <section className="aside-container-text-left">
        <h1 className="aside-container-text-left-pizza">
          Meat <br /> pizza
        </h1>
        <h2 className="aside-container-text-left-about-pizza">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </h2>
        <section className="aside-container-text-left-main">
          <div className="aside-container-text-left-add-to-cart">
            <div className="aside-container-second-text-left-add-to-cart">
              <p className="aside-container-text-left-add-to-cart-text">
                Add to cart
              </p>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="aside-container-text-left-price">689₽</div>
        </section>
      </section>
      <section className="aside-container-second">
        <section className="aside-container-second-first">
          <img
            className="aside-container-second-first-img1"
            src={pizzaMenu1}
            alt="pizza1"
          ></img>
          <p className="aside-container-second-first-text">
            Tomato <br />
            Pizza
          </p>
        </section>
        <section className="aside-container-second-first">
          <img
            className="aside-container-second-first-img1"
            src={pizzaMenu2}
            alt="pizza1"
          ></img>
          <p className="aside-container-second-first-text">
            Vegan <br />
            Pizza
          </p>
        </section>
        <section className="aside-container-second-first">
          <img
            className="aside-container-second-first-img1"
            src={pizzaMenu3}
            alt="pizza1"
          ></img>
          <p className="aside-container-second-first-text">
            Mushrooms <br />
            Pizza
          </p>
        </section>
      </section>
    </aside>
  );
};

export default Aside;
