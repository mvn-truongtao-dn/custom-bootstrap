import React, { useState } from "react";

export default function Accordionindex(props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${props.item}`}>
        <button
          className={`accordion-button ${props.activeBtn}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${props.index}`}
          aria-expanded={props.ariaExpanded}
          aria-controls={`flush-collapse${props.index}`}
          onClick={props.onClick}
        >
          Accordion {props.index}
        </button>
      </h2>
      <div
        id={`flush-collapse${props.index}`}
        className={`accordion-collapse collapse ${props.activeAccordionBody}`}
        aria-labelledby={`flush-heading${props.index}`}
      >
        <div className="accordion-body">
            {props.item.accordion_body}
        </div>
      </div>
    </div>
  );
}
