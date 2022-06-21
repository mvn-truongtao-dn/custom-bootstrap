import React from "react";

export default function Buttons() {
  return (
    <>
      <h2>Examples</h2>
      <div className="block-content flex flex-wrap-wrap gap-1">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-success">success</button>
        <button className="btn btn-danger">danger</button>
        <button className="btn btn-warning">warning</button>
        <button className="btn btn-info">info</button>
        <button className="btn btn-light">light</button>
        <button className="btn btn-dark">dark</button>
        <button className="btn btn-link">Link</button>
      </div>
      <h2>Button tags</h2>
      <div className="block-content flex flex-wrap-wrap gap-1">
        <a href="#" className="btn btn-primary" role="button">
          Link
        </a>
        <button type="submit" className="btn btn-primary">
          Button
        </button>
        <input type="button" className="btn btn-primary" value="Input" />
        <input className="btn btn-primary" type="submit" value="Submit" />
        <input className="btn btn-primary" type="reset" value="Reset" />
      </div>
      <h2>Outline buttons</h2>
      <div className="block-content flex flex-wrap-wrap gap-1">
        <button className="btn btn-outline-primary" type="button">
          primary
        </button>
        <button className="btn btn-outline-secondary" type="button">
          secondary
        </button>
        <button className="btn btn-outline-success" type="button">
          success
        </button>
        <button className="btn btn-outline-danger" type="button">
          danger
        </button>
        <button className="btn btn-outline-warning" type="button">
          warning
        </button>
        <button className="btn btn-outline-info" type="button">
          info
        </button>
        <button className="btn btn-outline-light" type="button">
          light
        </button>
        <button className="btn btn-outline-dark" type="button">
          dark
        </button>
      </div>
      <h2>Sizes</h2>
      <div className="block-content flex gap-1">
        <button className="btn btn-primary btn-lg">Large button</button>
        <button className="btn btn-primary btn-sm align-self-center">Small button</button>
      </div>
      <h2>Disabled state</h2>
      <div className="block-content flex gap-1">
        <button className="btn btn-primary btn-lg" disabled>
          Large button
        </button>
        <button className="btn btn-primary btn-sm align-self-center" disabled>
          Small button
        </button>
      </div>
      <div className="block-content">
        <a
          className="btn btn-primary btn-lg disabled"
          role="button"
          aria-disabled="true"
        >
          Large button
        </a>
      </div>
      <h2>Link functionality caveat</h2>
      <div className="block-content">
        <a
          href="#"
          className="btn btn-primary btn-lg disabled"
          tabIndex="-1"
          role="button"
          aria-disabled="true"
        >
          Primary link
        </a>
      </div>
      <h2>Block buttons</h2>
      <div className="block-content d-grid">
        <button className="btn btn-primary" type="button">
          Button
        </button>
        <button className="btn btn-primary" type="button">
          Button
        </button>
      </div>
      <div className="block-content d-grid mx-auto col-6">
        <button className="btn btn-primary" type="button">
          Button
        </button>
        <button className="btn btn-primary" type="button">
          Button
        </button>
      </div>
      <div className="block-content flex align-items-center justify-content-md-end gap-1">
        <button className="btn btn-primary" type="button">
          Button
        </button>
        <button className="btn btn-primary btn-sm" type="button">
          Button
        </button>
      </div>
    </>
  );
}
