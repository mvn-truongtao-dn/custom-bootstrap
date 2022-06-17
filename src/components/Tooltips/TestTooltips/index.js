import React from "react";

export default function TestTooltips() {
  return (
    <>
      <div className="tooltip">
        <button
          className="btn btn-secondary"
          data-bs-toggle="toggle"
          data-bs-placement="start"
          title="Tooltip on start"
        >
          Tooltip on start
        </button>
        <div className="popover fade bs-toggle-start">
          <div className="popover-header">Popover title</div>
          <div className="popover-body">
            Popover body content is set in this attribute
          </div>
        </div>
      </div>
      <br></br>
      <div className="tooltip">
        <button
          className="btn btn-secondary"
          data-bs-toggle="toggle"
          data-bs-placement="start"
          title="Tooltip on start"
        >
          Tooltip on start
        </button>
        <div className="popover fade bs-toggle-top">
          <div className="popover-header">Popover title</div>
          <div className="popover-body">
            Popover body content is set in this attribute
          </div>
        </div>
      </div>
    </>
  );
}
