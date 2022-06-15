import React from "react";

export default function NavsTagsItem() {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Active</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Link</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Link</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </>
  );
}
