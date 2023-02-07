import React, { useRef } from "react";
import "./Search.css";

type SearchProps = {
  searchValue: string;
  setSearchValue: (param: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="search-container">
      <div className="search-container-second">
        <input
          ref={inputRef}
          value={searchValue}
          className="search-input"
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Find pizza..."
        />
        {searchValue && (
          <svg
            onClick={onClickClear}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Search;
