import React from "react";
import PaginationItem from "../../components/Pagination";

export default function Pagination() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <nav aria-label="page navigation example">
          <ul className="pagination">
            <PaginationItem value="Prevent"></PaginationItem>
            <PaginationItem value="1"></PaginationItem>
            <PaginationItem value="2"></PaginationItem>
            <PaginationItem value="3"></PaginationItem>
            <PaginationItem value="Next"></PaginationItem>
          </ul>
        </nav>
      </div>
      <h2>Disabled and active states</h2>
      <div className="block-content">
        <nav aria-label="">
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="" className="page-link">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a href="" className="page-link">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a href="" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="" className="page-link">
                3
              </a>
            </li>
            <li className="page-item ">
              <a href="" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h2>Sizing</h2>
      <div className="block-content">
        <nav aria-label="">
          <ul className="pagination pagination-lg">
            <li className="page-item disabled">
              <a href="" className="page-link">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a href="" className="page-link">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a href="" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="" className="page-link">
                3
              </a>
            </li>
            <li className="page-item ">
              <a href="" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h2>Alignment</h2>
      <div className="block-content">
        <nav aria-label="page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a href="#" className="page-link">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
