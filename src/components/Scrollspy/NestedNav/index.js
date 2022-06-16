import React, { useEffect } from "react";

export default function NestedNav() {
  useEffect(() => {
    const array_section = document.querySelectorAll(
      ".scrollspy-example3 section"
    );
    console.log(array_section);
    document
      .querySelector(".scrollspy-example3")
      .addEventListener("scroll", (e) => {
        var sTop = e.target.scrollTop + 25;
        console.log(sTop);
        for (let s in array_section) {
          if (
            array_section.hasOwnProperty(s) &&
            array_section[s].offsetTop <= sTop
          ) {
            const id = array_section[s].id;
            console.log(`current:${id}`);
            // document
            //   .querySelector("#scrollspy-example3 .active-bg")
            //   .classList.remove("active-bg");
            // document
            //   .querySelector(`[data-id=${id}]`)
            //   .classList.add("active-bg");
            const cut = array_section["0"].id;
            console.log(cut);
            const cut1 = array_section[s].id.split("-");
            console.log(cut1);
            console.log(
              document.querySelectorAll("#scrollspy-example3 .active-bg")
            );
            const link_active = document.querySelectorAll(
              "#scrollspy-example3 .active-bg"
            );
            for (let i in link_active) {
              if (link_active.hasOwnProperty(i)) {
                const id_active = link_active[i].getAttribute("data-id");
                console.log(id_active);
                document
                .querySelector(`[data-id=${id_active}]`)
                .classList.remove("active-bg");
                document
                  .querySelector(`[data-id=${id}]`)
                  .classList.add("active-bg");
                console.log(cut1.indexOf("item1"));

                if (cut1.indexOf(cut) !== -1) {
                  console.log(`parent:${cut}`);
                  document
                    .querySelector(`[data-id=${cut}`)
                    .classList.add("active-bg");
                }
              }
              // document
              //   .querySelector("#scrollspy-example3 .active-bg")
              //   .classList.remove("active-bg");
            }
          }
        }
      });
  }, []);
  return (
    <div className="flex">
      <div className="col-3">
        <nav
          id="scrollspy-example3"
          className="navbar bg-light flex align-items-stretch flex-column"
        >
          <div className="navbar-brand">Navbar</div>
          <nav className="nav nav-pills flex-column">
            <a href="#item1" data-id="item1" className="nav-link active-bg">
              Item 1
            </a>
            <nav className="nav nav-pills flex-column">
              <a data-id="item1-1" href="#item1-1" className="nav-link ml-10">
                Item 1-1
              </a>
              <a href="#item1-2" data-id="item1-2" className="nav-link ml-10">
                Item 1-2
              </a>
            </nav>
            <a href="#item2" data-id="item2" className="nav-link">
              Item 2
            </a>
            <a href="#item3" data-id="item3" className="nav-link">
              Item 3
            </a>
            <nav className="nav nav-pills flex-column">
              <a href="#item3-1" data-id="item3-1" className="nav-link ml-10">
                Item 3-1
              </a>
              <a href="#item3-2" data-id="item3-2" className="nav-link ml-10">
                Item 3-2
              </a>
              <a href="#item3-3" data-id="item3-3" className="nav-link ml-10">
                Item 3-3
              </a>
            </nav>
          </nav>
        </nav>
      </div>
      <div className="col-9">
        <div
          className="scrollspy-example3"
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-offset="0"
          tabIndex="0"
        >
          <section id="item1">
            <h4>Item 1</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </section>
          <section id="item1-1">
            <h4>Item 1-1</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </section>
          <section id="item1-2">
            <h4>Item 1-2</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </section>
          <section id="item2">
            <h4>Item 2</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </section>
          <section id="item3">
            <h4>Item 3</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </section>
          <section id="item3-1">
            <h4>Item 3-1</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </section>
          <section id="item3-2">
            <h4>Item 3-2</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </section>
          <section id="item3-3">
            <h4>Item 3-3</h4>
            <p>
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
