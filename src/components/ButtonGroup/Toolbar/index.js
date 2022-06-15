import React from "react";

export default function Toolbar() {
  return (
    <div
      className="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div className="btn-group" role="group" aria-label="First group">
        <button className="btn btn-primary" type="button">
          1
        </button>
        <button className="btn btn-primary" type="button">
          2
        </button>
        <button className="btn btn-primary" type="button">
          3
        </button>
        <button className="btn btn-primary" type="button">
          4
        </button>
      </div>
      <div className="input-group">
        <div className="input-group-text" id="btn-group-addon">
          @
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btn-group-addon"
        />
      </div>
    </div>
  );
}
