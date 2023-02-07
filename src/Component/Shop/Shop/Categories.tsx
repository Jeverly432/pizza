import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const TypeArr = ["All", "Meat", "Vegan", "Grill", "Spicy", "Closed"];

  return (
    <div className="shop-main-container-filter-second">
      {TypeArr.map((categotyName, index) => (
        <div
          key={categotyName}
          onClick={() => onChangeCategory(index)}
          className={value === index ? "shop-up-active" : "shop-up-noActive"}
        >
          {categotyName}
        </div>
      ))}
    </div>
  );
};

export default Categories;
