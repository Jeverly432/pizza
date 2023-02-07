import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../../redux/slices/filterSlice";
import {RootState} from '../../../redux/store'

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);
  const sortRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  type ListItem = {
    name: string;
    sortProperty: string;
  };

  const list: ListItem[] = [
    { name: "Popularity(DESC)", sortProperty: "raiting" },
    { name: "Popularity(ASC)", sortProperty: "-raiting" },
    { name: "Price(DESC)", sortProperty: "price" },
    { name: "Price(ASC)", sortProperty: "-price" },
    { name: "Alphabetically(DESC)", sortProperty: "title" },
    { name: "Alphabetically(ASC)", sortProperty: "-title" },
  ];

  const setListOnClickFunc = (obj: ListItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      let path = event.composedPath().includes(sortRef.current);
      if (!path) setOpen(false);
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="sort-container" ref={sortRef}>
        <div className="sort-container-second">
          <div>
            <div className="shop-main-container-filter-three-sort">
              Sort by:
            </div>
          </div>
          <div>
            <div
              onClick={() => setOpen(!open)}
              className="shop-main-container-filter-three-sort-dragDrop"
            >
              {sort.name}
            </div>
          </div>
        </div>
        {open && (
          <ul className="sort-popup">
            {list.map((obj, index) => (
              <li
                key={index}
                onClick={() => setListOnClickFunc(obj)}
                className={
                  sort.sortProperty === obj.sortProperty
                    ? "sort-popup-li-active"
                    : "sort-popup-li"
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Sort;
