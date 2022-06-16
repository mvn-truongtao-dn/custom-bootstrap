import React, { useState } from "react";

export default function PopoverDismiss() {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setActive(true);
  };
  const handleClose = () => {
    setActive(false);
  };
  return (
    <div className="dismiss-popover">
      <a
        href="#"
        className="btn btn-danger"
        tabIndex="0"
        role="button"
        data-bs-toggle="popover"
        data-bs-trigger="focus"
        title="Dismissible popover"
        data-bs-content="And here's some amazing content. It's very engaging. Right?"
        onClick={handleClick}
      >
        Dissmissible popover
      </a>
      <div
        className={`popover fade bs-popover-end ${active ? "show" : "hide"}`}
      >
        <div className="popover-arrow"></div>
        <div className="popover-header">Dismissible popover</div>
        <div className="popover-body">
          And here's some amazing content. It's very engaging. Right?
        </div>
      </div>
      <div className="backdrop fade show" onClick={handleClose}></div>
    </div>
  );
}
