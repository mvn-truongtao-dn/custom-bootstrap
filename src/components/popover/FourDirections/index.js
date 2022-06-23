import React, { useState } from "react";

export default function PopoverItem(props) {
  const [active, setActive] = useState(false);
  const [targetActive, setTargetActive] = useState("");
  const handleClick = (e) => {
      const target = e.target.getAttribute("data-bs-placement");
      setTargetActive(target);
      setActive(!active);
  };
  return (
    <div className="tooltip position-relative">
      <button
        className="btn btn-secondary"
        type="button"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement={props.status}
        data-bs-content={`${props.status} popover`}
        onClick={handleClick}
      >
        Popover on {props.status}
      </button>
      <div
        className={`popover fade bs-popover-${targetActive} ${active ? "show" : "hide"}`}
      >
        <div className="popover-arrow"></div>
        <div className="popover-header">Popover header</div>
        <div className="popover-body">
          Popover body content is set in this attribute
        </div>
      </div>
    </div>
  );
}
