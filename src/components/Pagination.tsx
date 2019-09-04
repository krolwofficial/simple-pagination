import React from "react";

interface PaginationPropsI {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  loading: boolean;
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  loading
}: PaginationPropsI) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              <span style={{ backgroundColor: loading ? "red" : "inherit" }}>
                {number}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
