import React from "react";

export default function Dropup(props) {
  return (
    <div className="dropdown">
      <div className={`bt-group ${props.property}`}>
        <button
          className="btn btn-outline-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props.property}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a href="" className="dropdown-item">
              Action
            </a>
          </li>
          <li>
            <a href="" className="dropdown-item">
              B
            </a>
          </li>
          <li>
            <a href="" className="dropdown-item">
              C
            </a>
          </li>
          <li>
            <a href="" className="dropdown-item">
              D
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
