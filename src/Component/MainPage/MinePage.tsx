import React from "react";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import Article from "./Article/Article";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="app-container-aside-article">
        <Aside />
        <Article />
      </div>
    </div>
  );
};

export default MainPage;
