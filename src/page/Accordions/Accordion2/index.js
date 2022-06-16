import { render } from "@testing-library/react";
import React, { useState } from "react";
import AccordionItem from "../../../components/Accordions/Accordion2";
import Accordion from "../Accordion";

export default function Accordion2() {
  const [activeIndex, setActiveIndex] = useState();
  const [isActive, setIsActive] = useState();
  const ListAccordion = [
    {
      accordion_body:
        "How many team members can I invite? How many team members can I invite? How many team members can I invite? How many team members can I invite?How many team members can I invite?",
    },
    {
      accordion_body: "How many team members can I invite?",
    },
    {
      accordion_body: "How many team members can I invite?",
    },
    {
      accordion_body: "How many team members can I invite?",
    },
    {
      accordion_body: "How many team members can I invite?",
    },
  ];
  const AccordionFlush = (index, e) => {
    setActiveIndex(index);
    const value = e.target.getAttribute("aria-expanded");
    setIsActive(value);
    if (value === "true") {
      e.target.setAttribute("aria-expanded", false);
    } else {
      e.target.setAttribute("aria-expanded", true);
    }
  };
  const renderAccordionItem = ListAccordion.map((item, index) => {
    const activeBtn =
      index === activeIndex && isActive === "false" ? "collapsed" : "";
    const activeAccordionBody =
      index === activeIndex && isActive === "false" ? "show" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        activeBtn={activeBtn}
        activeAccordionBody={activeAccordionBody}
        ariaExpanded={ariaExpanded}
        index={index}
        item={item}
        key={index}
        onClick={(e) => AccordionFlush(index, e)}
      />
    );
  });
  return (
    <>
      <h2>Flush</h2>
      <div className="block-content">
        <div className="accordion accordion-flush" id="accordion-plush-example">
          {renderAccordionItem}
        </div>
      </div>
      <h2>Always open</h2>
      <div className="block-content">
        <Accordion />
      </div>
    </>
  );
}
