import React from "react";

export default function Progress() {
  return (
    <>
      <div className="block-content">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "25%" }}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "100%" }}
          >
            100%
          </div>
        </div>
        <div className="progress" style={{ height: "1px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "100%" }}
          ></div>
        </div>
        <div className="progress" style={{ height: "1rem" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "100%" }}
          ></div>
        </div>
        <div className="progress" style={{ height: "1rem" }}>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "25%" }}
          ></div>
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "25%" }}
          ></div>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>
      <h2>Striped</h2>
      <div className="block-content">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped "
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>
      <h2>Animated stripes</h2>
      <div className="block-content">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width:"25%"}}
          ></div>
        </div>
      </div>
    </>
  );
}
