import React, { useEffect } from "react";
import DropDownItem from "../../Dropdown/SingleButton";

export default function ScrollspyExample() {
  useEffect (() => {
    const array_section = document.querySelectorAll(".scrollspy-example section");

    document
      .querySelector(".scrollspy-example")
      .addEventListener("scroll", (e) => {
        var sTop = e.target.scrollTop + 76;
        for (let s in array_section) {
          if (
            array_section.hasOwnProperty(s) &&
            array_section[s].offsetTop <= sTop
          ) {
            const id = array_section[s].id;
            console.log(id);
            document.querySelector(".active-bg").classList.remove("active-bg");
            document
              .querySelector(`[data-id=${id}]`)
              .classList.add("active-bg");
          }
        }
      });
  }, []);
  return (
    <div className="block-content">
      <nav className="navbar navbar-light bg-light" id="navbar-example2">
        <div className="container-fluid">
          <a href="/#" className="navbar-brand">
            Navbar
          </a>
          <ul className="navbar-nav nav-pills">
            <li className="nav-item">
              <a
                href="#first"
                id="test"
                data-id="first"
                className="nav-link active-bg"
              >
                First
              </a>
            </li>
            <li className="nav-item">
              <a href="#second" data-id="second" className="nav-link">
                Second
              </a>
            </li>
            <li className="nav-item">
              <DropDownItem property="nav-link"></DropDownItem>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="scrollspy-example"
        tabIndex="0"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
      >
        <section id="first">
          <h4>First Heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </section>
        <section id="second">
          <h4>Second Heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </section>
        <section id="third">
          <h4>Third Heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting. This is some placeholder content for the scrollspy
            page. Note that as you scroll down the page, the appropriate
            navigation link is highlighted. It's repeated throughout the
            component example. We keep adding some more example copy here to
            emphasize the scrolling and highlighting. This is some placeholder
            content for the scrollspy page. Note that as you scroll down the
            page, the appropriate navigation link is highlighted. It's repeated
            throughout the component example. We keep adding some more example
            copy here to emphasize the scrolling and highlighting.
          </p>
        </section>
        <section id="fourth">
          <h4>Fifth Heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </section>
      </div>
    </div>
  );
}
