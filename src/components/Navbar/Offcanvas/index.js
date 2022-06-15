import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDownItem from "../../Dropdown/SingleButton";

export default function NavbarOffcanvas(props) {
  const [active, setActive] = useState(false);
  const HandleOpenOffcanvas = () => {
    setActive(true);
  };
  const HandleCloseOffcanvas = () => {
    setActive(false);
  };
  const HandleBackDrop = () => {
    setActive(false);
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Offcanvas navbar
          </a>
          <button
            className="navbar-toggle"
            type="button"
            aria-expanded="false"
            data-bs-toggle="collapse"
            data-bs-target="#offcanvas-navbar"
            aria-label="Toggle navigation"
            onClick={HandleOpenOffcanvas}
          >
            <span className="navbar-toggle-icon"></span>
          </button>
          <div
            className={`offcanvas ${props.property} ${active ? "show" : ""}`}
            tabIndex="-1"
            id="offcanvas-navbar"
            aria-labelledby="offcanvas-navbar-label"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Offcanvas</h5>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={HandleCloseOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <DropDownItem></DropDownItem>
                  </a>
                </li>
              </ul>
              <form className="flex">
                <input
                  type="search"
                  className="form-control mr-5"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div
            className={`offcanvas-backdrop fade ${active ? "show" : ""}`}
            onClick={HandleBackDrop}
          ></div>
        </div>
      </nav>
    </>
  );
}
