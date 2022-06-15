import React from "react";

export default function CloseButton() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <button type="button" className="btn-close" aria-label="Close"></button>{" "}
      </div>
      <h2>Disabled state</h2>
      <div className="block-content">
        <button
          className="btn-close"
          disabled
          type="button"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
