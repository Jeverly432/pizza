import React from "react";
import "./Article.css";
import pizzaOutline from "../../../Img/pizzaOutline.png";
import pizzaShadow from "../../../Img/pizzaShadow.png";
import line from "../../../Img/line.png";

const Article: React.FC = () => {
  return (
    <article className="article-container">
      <div className="article-container-big-img"></div>
      <div>
        <img
          src={pizzaOutline}
          className="pizzaOutline"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaOutline}
          className="pizzaOutline2"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaOutline}
          className="pizzaOutline3"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaOutline}
          className="pizzaOutline4"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaOutline}
          className="pizzaOutline5"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaShadow}
          className="pizzaOutline6"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaOutline}
          className="pizzaOutline7"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaShadow}
          className="pizzaOutline8"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaShadow}
          className="pizzaOutline9"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img
          src={pizzaOutline}
          className="pizzaOutline10"
          alt="pizzaOutline"
        ></img>
      </div>
      <div>
        <img src={line} className="pizzaOutline11" alt="pizzaOutline"></img>
      </div>
      <div>
        <img src={line} className="pizzaOutline11" alt="pizzaOutline"></img>
      </div>
      <div>
        <img src={line} className="pizzaOutline11" alt="pizzaOutline"></img>
      </div>
      <div>
        <img
          src={pizzaOutline}
          className="pizzaOutline12"
          alt="pizzaOutline"
        ></img>
      </div>
    </article>
  );
};

export default Article;
