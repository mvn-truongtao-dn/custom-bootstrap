import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Header() {
  let location = useLocation();
  const address = location.pathname.slice(1);

  useEffect(() => {
    const array_link = document.querySelectorAll(".navbar-link");
    for (let i in array_link) {
      if (array_link[i].href === `http://localhost:3000/${address}`) {
        document
          .querySelector(".page-header .active")
          .classList.remove("active");
        document.getElementById(address).classList.add("active");
      }
    }
  });
  return (
    <header className="page-header">
      <nav className="navbar">
        <ul>
          <li className="navbar-item">
            <h3 className="navbar-title">Components</h3>
          </li>
          <li className="navbar-item">
            <Link to="/accordion" id="accordion" className="navbar-link active">
              Accordion
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/alerts" id="alerts" className="navbar-link">
              Alerts
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="badge" id="badge" className="navbar-link">
              Badge
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="breadcrumb" id="breadcrumb" className="navbar-link">
              Breadcrumb
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="buttons" id="buttons" className="navbar-link">
              Buttons
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="button_group" id="button_group" className="navbar-link">
              Button Group
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="card" id="card" className="navbar-link">
              Card
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="close_button" id="close_button" className="navbar-link">
              CloseButton
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="collapse" id="collapse" className="navbar-link">
              Collapse
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="dropdown" id="dropdown" className="navbar-link">
              Dropdown
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="listgroup" id="listgroup" className="navbar-link">
              ListGroup
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="modal" id="modal" className="navbar-link">
              Modal
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="navs-tags" id="navs-tags" className="navbar-link">
              Navs & tags
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="navbar" id="navbar" className="navbar-link">
              Navbar
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="offcanvas" id="offcanvas" className="navbar-link">
              Offcanvas
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="pagination" id="pagination" className="navbar-link">
              Pagination
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="placeholders" id="placeholders" className="navbar-link">
              Placeholders
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="popovers" id="popovers" className="navbar-link">
              Popovers
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="progress" id="progress" className="navbar-link">
              Progress
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="scrollspy" id="scrollspy" className="navbar-link">
              Scrollspy
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="spinners" id="spinners" className="navbar-link">
              Spinners
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="toasts" id="toasts" className="navbar-link">
              Toasts
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="tooltips" id="tooltips" className="navbar-link">
              Tooltips
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
