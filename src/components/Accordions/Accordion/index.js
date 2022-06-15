import React, { useState } from "react";

export default function AccordionItem(props) {
  const [active, setActive] = useState();
  const CollapseAccordion = (e) => {
    const value = e.target.getAttribute("aria-expanded");
    const target_show = e.target.getAttribute("");
    console.log(value);
    console.log(e.target.className);
    setActive(value);
    if (value === "true") {
      e.target.setAttribute("aria-expanded", false);
    } else {
      e.target.setAttribute("aria-expanded", true);
    }
  };
  return (
    <div className="accordion-item">
      <h2
        className="accordion-header"
        id={`panels-stay-open-heading-${props.item}`}
      >
        <button
          className={`accordion-button ${active === "true" ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panels-stay-open-collapse-${props.item}`}
          aria-expanded="true"
          aria-controls={`panels-stay-open-collapse-${props.item}`}
          onClick={CollapseAccordion}
        >
          Accordion {props.item}
        </button>
      </h2>
      <div
        id={`panels-stay-open-collapse-${props.item}`}
        className={`accordion-collapse collapse ${
          active === "true" ? "show" : ""
        }`}
        aria-labelledby={`panels-stay-open-heading-${props.item}`}
      >
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
  );
}
