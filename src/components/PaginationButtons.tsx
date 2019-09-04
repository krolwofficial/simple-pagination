import React from "react";

const Pagination = ({
  paginateFirst,
  paginateNext,
  paginatePrev,
  paginateLast
}: any) => (
  <nav className="pb-4">
    <button
      onClick={() => paginateFirst()}
      type="button"
      className="btn btn-secondary mr-3"
    >
      First
    </button>
    <button
      onClick={() => paginatePrev()}
      type="button"
      className="btn btn-secondary mr-3"
    >
      Previous
    </button>
    <button
      onClick={() => paginateNext()}
      type="button"
      className="btn btn-secondary mr-3"
    >
      Next
    </button>
    <button
      onClick={() => paginateLast()}
      type="button"
      className="btn btn-secondary mr-3"
    >
      Last
    </button>
  </nav>
);

export default Pagination;
