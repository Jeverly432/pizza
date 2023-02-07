import React, { useEffect, useState } from "react";
import "../Shop/Shop.css";
import axios from "axios";
import Placeholder from "./Placeholder";
import ComponentShop from "./Component";
import Categories from "./Categories";
import Sort from "./Sort";
import Search from "./Search";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
} from "../../../redux/slices/filterSlice";
import { setItems } from "../../../redux/slices/pizzaSlice";
import {RootState} from '../../../redux/store'

const Shop: React.FC = () => {
  const { categoryId, sort, currentPage } = useSelector(
    (state:RootState) => state.filter
  );
  const items = useSelector((state: RootState) => state.pizza.items);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const onChangeCategory = (id:number) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (page:number) => {
    dispatch(setCurrentPage(page));
  };

  const pizazz = items
    .filter((obj:any) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj:any) => <ComponentShop key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Placeholder key={index} />
  ));

  useEffect(() => {
    setIsLoading(true);
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";

    axios
      .get(
        `https://63cce89fd4d47898e38f8402.mockapi.io/Items?page=${currentPage}&limit=5&${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        dispatch(setItems(res.data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "Axios error");
      });
  }, [dispatch, categoryId, sort.sortProperty, currentPage, searchValue]);

  return (
    <article className="shop-main-container">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <section className="shop-main-container-second">
        <section className="shop-main-container-filter">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <div className="shop-main-container-filter-three">
            <Sort />
          </div>
        </section>
      </section>
      <section className="shop-main-container-border-between"></section>
      <section className="shop-second-container">
        <div className="shop-second-container-all-pizza">All Pizza</div>
      </section>
      <section className="shop-main-container-section-pizza">
        {isLoading ? skeletons : pizazz}
      </section>
      <section className="shop-main-container-section-pagination">
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </section>
    </article>
  );
};

export default Shop;
