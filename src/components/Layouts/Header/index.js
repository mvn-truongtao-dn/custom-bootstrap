import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="page-header">
      <nav className="navbar">
        <ul>
          <li className="navbar-item">
            <h3 className="navbar-title">Components</h3>
          </li>
          <li className="navbar-item">
            <Link to="/accordion" className="navbar-link">
              Accordion
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/alerts" className="navbar-link">
              Alerts
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="badge" className="navbar-link">
              Badge
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="breadcrumb" className="navbar-link">
              Breadcrumb
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="buttons" className="navbar-link">
              Buttons
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="button_group" className="navbar-link">
              Button Group
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="card" className="navbar-link">
              Card
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="close_button" className="navbar-link">
              CloseButton
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="collapse" className="navbar-link">
              Collapse
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="dropdown" className="navbar-link">
              Dropdown
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="listgroup" className="navbar-link">
              ListGroup
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="modal" className="navbar-link">
              Modal
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="navs-tags" className="navbar-link">
              Navs & tags
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="navbar" className="navbar-link">
              Navbar
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="offcanvas" className="navbar-link">
              Offcanvas
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="pagination" className="navbar-link">
              Pagination
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="placeholders" className="navbar-link">
              Placeholders
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="popovers" className="navbar-link">
              Popovers
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="progress" className="navbar-link">
              Progress
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="scrollspy" className="navbar-link">
              Scrollspy
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="spinners" className="navbar-link">
              Spinners
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="toasts" className="navbar-link">
              Toasts
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="tooltips" className="navbar-link">
              Tooltips
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
