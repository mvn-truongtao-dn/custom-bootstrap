import React, { useRef, useState } from "react";

export default function DropDownItem(props) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const activeRef = useRef();
  const HandleClickDropDown = (e) => {
    if (e.target.getAttribute("aria-expanded") === "true") {
      e.target.setAttribute("aria-expanded", false);
    } else {
      e.target.setAttribute("aria-expanded", true);
    }
    const id = e.target.id;
    console.log(e.target.classList.contains("avtive-bg"));
    setActiveDropdown(!activeDropdown);
    if (
      activeDropdown === false &&
      document.querySelector(".dropdown-item .active")
    ) {
      e.target.classList.add("active-bg");
      e.target.classList.show("active-bg");
    }
  };
  const handleActive = (e) => {
    // document.getElementById("dropdown-menu-button1").classList.add("active-bg")
    e.target.classList.add("active");
    console.log("ok");
  };
  return (
    <div className="dropdown">
      <button
        ref={activeRef}
        className={`btn ${props.property} dropdown-toggle `}
        data-id="third"
        type="button"
        data-bs-toggle="dropdown"
        id="dropdown-menu-button1"
        aria-expanded="false"
        onClick={HandleClickDropDown}
      >
        Dropdown Toggle
      </button>
      <ul
        className={`dropdown-menu ${props.property2} ${
          activeDropdown ? "show" : "hide"
        }`}
        aria-labelledby="dropdown-menu-button1"
      >
        <li>
          <h6 className="dropdown-header">Dropdown header</h6>
        </li>
        <li data-id="third">
          <a href="#third" className="dropdown-item" onClick={handleActive}>
            Third
          </a>
        </li>
        <li data-id="fourth">
          <a href="#fourth" className="dropdown-item disabled">
            fourth
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>
        <li>
          <a
            href="#"
            className="dropdown-item"
            onClick={handleActive}
          >
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
