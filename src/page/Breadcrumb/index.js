import React from "react";

export default function Breadcrumb() {
  return (
    <>
      <div className="block-content">
        <nav aria-label="breadscrumb">
          <ol className="breadscrumb">
            <li className="breadscrumb-item active" aria-current="page">
              <a href="#" className="breadcrumb-link">
                Home
              </a>
            </li>
          </ol>
        </nav>
        <nav aria-label="breadscrumb">
          <ol className="breadscrumb">
            <li className="breadscrumb-item" aria-current="page">
              <a href="#" className="breadcrumb-link">
                Home
              </a>
            </li>
            <li className="breadscrumb-item active" aria-current="page">
              <a href="#" className="breadcrumb-link">
                Libary
              </a>
            </li>
          </ol>
        </nav>
        <nav aria-label="breadscrumb">
          <ol className="breadscrumb">
            <li className="breadscrumb-item" aria-current="page">
              <a href="#" className="breadcrumb-link">
                Home
              </a>
            </li>
            <li className="breadscrumb-item" aria-current="page">
              <a href="#" className="breadcrumb-link">
                Libary
              </a>
            </li>
            <li className="breadscrumb-item active" aria-current="page">
              <a href="#" className="breadcrumb-link">
                Data
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
