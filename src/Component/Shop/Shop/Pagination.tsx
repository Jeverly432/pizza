import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
  return (
    <ReactPaginate
      className="paginate-container"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
