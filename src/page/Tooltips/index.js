import React, { useEffect, useState } from "react";

export default function Tooltips() {
  const [active, setActive] = useState(false);
  const [targetActive, setTargetActive] = useState("");
  const [statusAction, setStatusAction] = useState("");
  const handleMouseOver = (e) => {
    console.log(e.target);
    const target = e.target.getAttribute("data-bs-placement");
    setTargetActive(target);
    setActive(true);
  };
  const handleClick = (e) => {
    console.log("focus");
    const target = e.target.getAttribute("data-bs-placement");
    console.log(target);
    setTargetActive(target);
    setStatusAction("click");
    setActive(active);
  };
  const handleMouseOut = () => {
    setActive(false);
  };
 
  return (
    <div>
      <h2>Example</h2>
      <h2>Example</h2>
      <h2>Example</h2>

      <div className="block-content">
        <div className="tooltip">
          <button
            className="btn btn-secondary mr-10"
            data-bs-toggle="tooltip"
            data-bs-placement="start"
            title="Tooltip on start"
            onMouseOver={handleMouseOver}
            onClick={handleClick}
            onMouseOut={handleMouseOut}
          >
            Tooltip on start
          </button>
          <button
            className="btn btn-secondary mr-10"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Tooltip on top
          </button>
          <button
            className="btn btn-secondary mr-10"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Tooltip on bottom"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Tooltip on bottom
          </button>
          <button
            className="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="end"
            title="Tooltip on end"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Tooltip on end
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
      </div>
    </div>
  );
}
