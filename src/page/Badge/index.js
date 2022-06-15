import React from "react";

export default function Badge() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <h1>
          Example heading <span className="badge bg-secondary">New</span>
        </h1>
        <h4>
          Example heading <span className="badge bg-secondary">New</span>
        </h4>
      </div>
      <h2>Buttons</h2>
      <div className="block-content">
        <button className="btn btn-primary" type="button">
          Notifications <span className="badge bg-secondary">4</span>
        </button>
      </div>
      <h2>Positioned</h2>
      <div className="block-content">
        <button type="button" className="btn btn-primary position-relative">
          Inbox
          <span className="badge bg-danger top-0 start-100 position-absolute rounded-pill translate-middle">
            +99
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
      <h2>Background colors</h2>
      <div className="block-content">
          <span className="badge bg-primary rounded-pill">Primary</span>
          <span className="badge bg-secondary">secondary</span>
          <span className="badge bg-success">success</span>
          <span className="badge bg-danger">danger</span>
          <span className="badge bg-warning">warning</span>
          <span className="badge bg-info">info</span>
          <span className="badge bg-light">light</span>
          <span className="badge bg-dark">dark</span>

      </div>
    </>
  );
}
