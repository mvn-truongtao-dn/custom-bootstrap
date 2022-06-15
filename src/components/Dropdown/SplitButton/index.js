import React, { useState } from "react";

export default function DropDownItem2(props) {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const HandleClickDropDown = (e) => {
    setActiveDropdown(!activeDropdown);

    if (e.target.getAttribute("aria-expanded") === "true") {
      e.target.setAttribute("aria-expanded", false);
    } else {
      e.target.setAttribute("aria-expanded", true);
    }
  };
  return (
    <div className="btn-group">
      <button className={`btn ${props.property}`} type="button">
        Primary
      </button>
      <button
        className={`btn ${props.property} dropdown-toggle dropdown-toggle-split`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={HandleClickDropDown}
      >
        <span className="visually-hidden"></span>
      </button>
      <ul
        className={`dropdown-menu ${activeDropdown ? "show" : ""}`}
        aria-labelledby="dropdown-menu-button1"
      >
        <li>
          <a href="#" className="dropdown-item">
            Action
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-item">
            Another action
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-item">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
