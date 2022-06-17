import React, { useState } from "react";

export default function TooltipItem(props) {
  const [active, setActive] = useState(false);
  const [targetActive, setTargetActive] = useState("");
  const handleMouseOver = (e) => {
    const target = e.target.getAttribute("data-bs-placement");
    setTargetActive(target);
    setActive(true);
  };
  const handleMouseOut = () => {
    setActive(false);
  };
  const handleClick = (e) => {
    const target = e.target.getAttribute("data-bs-placement");
    console.log(target);
    setTargetActive(target);
    setActive(active);
  }
  return (
    <div className="tooltip position-relative">
      <button
        className="btn btn-secondary"
        type="button"
        data-bs-placement={props.placement}
        title={`Tooltip on ${props.placement}`}
        data-bs-toggle="tooltip"
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        onMouseOut={handleMouseOut}
      >
        Tooltip on {props.placement}
      </button>
      <div
        className={`popover fade bs-popover-${targetActive} ${
          active ? "show" : "hide"
        }`}
      >
        <div className="popover-arrow"></div>
        <div className="popover-header">Popover title</div>
        <div className="popover-body">
          Popover body content is set in this attribute
        </div>
      </div>
    </div>
  );
}
