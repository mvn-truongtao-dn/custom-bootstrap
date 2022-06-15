import React, { useEffect, useState } from "react";
import PopoverDisable from "../../components/popover/Disable";
import PopoverDismiss from "../../components/popover/Dismiss";
import PopoverItem from "../../components/popover/FourDirections";

export default function Popovers() {
  const [active, setActive] = useState(false);
  const [targetChange, setTargetChange] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };
  const handleClick = (e) => {
    const target = e.target.getAttribute("data-bs-toggle");
    console.log(target);
    setTargetChange(target);
    console.log(document.querySelector(`.${target}`).scrollHeight);
    setTimeout(() => {
      document.querySelector(`.${target}`).classList.add("showing");
    }, 200);
    setTimeout(() => {
      document.querySelector(`.${target}`).classList.remove("showing");
      setActive(!active);
    }, 300);

    console.log(scrollY);
  };
  if (targetChange) {
    const status = document
      .querySelector(`.${targetChange}`)
      .classList.contains("bs-popover-end");
    if (scrollY >= 45 && active) {
      document
        .querySelector(`.${targetChange}`)
        .classList.remove("bs-popover-end");
      document
        .querySelector(`.${targetChange}`)
        .classList.add("bs-popover-bottom");
    } else {
      document
        .querySelector(`.${targetChange}`)
        .classList.remove("bs-popover-bottom");
      document
        .querySelector(`.${targetChange}`)
        .classList.add("bs-popover-end");
    }
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);
  console.log(scrollY);
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <div className="popover-example1">
          <button
            className="btn btn-lg btn-danger"
            data-bs-toggle="popover"
            title="Popover title"
            data-bs-content="And here's some amazing"
            onClick={handleClick}
          >
            Click to toggle popover
          </button>
          <div
            className={`popover fade bs-popover-end ${
              active ? "show" : "hide"
            }`}
          >
            <div className="popover-arrow"></div>
            <div className="popover-header">Popover title</div>
            <div className="popover-body">
              Popover body content is set in this attribute.
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ width: "100%", height: "2000px" }}></div> */}
      <h2>Four directions</h2>
      <div className="block-content">
        <div className="flex">
          <PopoverItem status="start"></PopoverItem>
          <PopoverItem status="top"></PopoverItem>
          <PopoverItem status="bottom"></PopoverItem>
          <PopoverItem status="end"></PopoverItem>
        </div>
      </div>
      <h2>Dismissible on next click</h2>
      <div className="block-content">
        <PopoverDismiss></PopoverDismiss>
      </div>
      <h2>Disabled elements</h2>
      <div className="block-content">
        <PopoverDisable></PopoverDisable>
      </div>
    </>
  );
}
