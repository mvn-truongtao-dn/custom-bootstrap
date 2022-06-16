import React, { useState } from "react";
import DropDownItem from "../../components/Dropdown/SingleButton";
import NavbarOffcanvas from "../../components/Navbar/Offcanvas";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const HandleCollapse = () => {
    setActive(!active);
  };
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <DropDownItem property="nav-link"></DropDownItem>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form class="flex">
                <input
                  class="form-control me-2 mr-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="btn-menu-respond">
              <button
                className="navbar-toggle"
                type="button"
                aria-expanded="false"
                data-bs-toggle="collapse"
                data-bs-target="#offcanvas-navbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggle-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <h2>Forms</h2>
      <div className="block-content">
        <nav className="navbar bg-light navbar-light">
          <div className="container-fluid">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </nav>
      </div>
      <h2>Text</h2>
      <div className="block-content">
        <nav className="navbar nav-light bg-light">
          <div className="container-fluid">
            <div className="navbar-text">
              Navbar text with an inline element
            </div>
          </div>
        </nav>
      </div>
      <h2>Color schemes</h2>
      <div className="block-content">
        <nav className="navbar navbar-dark bg-primary mb-10">
          <div className="container-fluid">
            <div className="navbar-brand">Navbar</div>
          </div>
        </nav>
        <nav className="navbar navbar-dark bg-dark mb-10">
          <div className="container-fluid">
            <div className="navbar-brand">Navbar</div>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light mb-10">
          <div className="container-fluid">
            <div className="navbar-brand">Navbar</div>
          </div>
        </nav>
      </div>
      <h2>Placement</h2>
      <div className="block-content">
        <nav className="navbar fixed-top navbar-dark bg-primary">
          <div className="container-fluid">
            <div className="navbar-brand">Fixed top</div>
          </div>
        </nav>
      </div>
      <div className="block-content">
        <nav className="navbar fixed-bottom navbar-dark bg-primary">
          <div className="container-fluid">
            <div className="navbar-brand">Fixed bottom</div>
          </div>
        </nav>
      </div>
      <h2>External content</h2>
      <div className="block-content example-external-content">
        <div
          className={`collapse ${active ? "show" : ""}`}
          id="navbar-toggle-external-content"
        >
          <div className="bg-dark p-20">
            <h5 className="text-white">Collapse content</h5>
            <span className="text-muted">Toggleable via the navbar brand</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggle"
              type="button"
              aria-expanded="false"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-toggle-external-content"
              aria-content="navbar-toggle-external-content"
              aria-label="Toggle navigation"
              onClick={HandleCollapse}
            >
              <span className="navbar-toggle-icon"></span>
            </button>
          </div>
        </nav>
      </div>
      <h2>Offcanvas</h2>
      <div className="block-content">
        <NavbarOffcanvas property="offcanvas-end" />
      </div>
    </>
  );
}
