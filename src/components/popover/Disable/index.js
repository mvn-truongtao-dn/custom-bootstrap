import React, { useState } from "react";

export default function PopoverDisable() {
  const [active, setActive] = useState(false);
  const handleOpen = (e) => {
    console.log("ok");
    setActive(true);
  };
  const handleClose = () => {
      setActive(false);
  }
  return (
    <div className="popover-disable">
      <div
        className="d-inline-block"
        data-bs-toggle="popover"
        tabIndex="0"
        data-bs-trigger="hover focus"
        data-bs-content="Disable popover"
        onMouseOver={handleOpen}
        onMouseOut={handleClose}
      >
        <button
          className="btn btn-primary"
          type="button"
          disabled

          //   onMouseOut={setActive(false)}
        >
          Disable
        </button>
      </div>
      <div
        className={`popover fade bs-popover-end ${active ? "show" : "hide"}`}
      >
        <div className="popover-arrow"></div>
        <div className="popover-header">Dismissible popover</div>
        <div className="popover-body">
          And here's some amazing content. It's very engaging. Right?
        </div>
      </div>
    </div>
  );
}
