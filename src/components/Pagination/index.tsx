import React from 'react';

interface PaginationProps {
  pageSize: number;
  setPageSize: (size: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  info?: {
    count?: number;
    totalPages?: number;
  };
}

const Pagination: React.FC<PaginationProps> = ({ pageSize, setPageSize, currentPage, setCurrentPage, info }) => {
  return (
    <div className="flex w-full justify-center flex-col md:flex-row  space-y-4 md:space-y-0 md:justify-between items-center mt-2">
      <div className="flex items-center space-x-4">
        <span>Σειρές ανά Σελίδα</span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(parseFloat(e.target.value));
            setCurrentPage(1);
          }}
          className="rounded-md border px-2"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </select>
        <span>
          {currentPage * pageSize - pageSize + 1}-
          {currentPage * pageSize} από {(info?.count ?? 0) * (info?.totalPages ?? 0)}
        </span>
      </div>
      <div className="flex flex-start items-center  space-x-4">
        <button
          className="p-2 border rounded"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span className="font-semibold underline">Σελίδα {currentPage}</span>
        <button className="p-2 border rounded" onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

