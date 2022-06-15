import React from "react";

export default function PaginationItem(props) {
  return (
    <>
      <li className="page-item">
        <a href="#" className="page-link" onClick={(e) => e.preventDefault()}>
          {props.value}
        </a>
      </li>
    </>
  );
}
