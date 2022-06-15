import React from "react";

export default function ListGroup() {
  return (
    <>
      <h2>Basic example</h2>
      <div className="block-content">
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <h2>Active items</h2>
      <div className="block-content">
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            An item
          </li>
          <li className="list-group-item disabled" aria-disabled="true">
            A second item
          </li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <h2> Flush</h2>
      <div className="block-content">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
        </ul>
      </div>
      <h2>Numbered</h2>
      <div className="block-content">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
        </ol>
      </div>
      <div className="block-content">
        <ol className="list-group list-group-numbered" style={{ width: "40%" }}>
          <li className="list-group-item flex align-items-start justify-content-between">
            <div className="me-auto">
              <div className="fw-bold">Subheading</div>
              Content for list itemP
            </div>
            <div className="badge bg-primary rounded-pill">14</div>
          </li>
          <li className="list-group-item flex align-items-start justify-content-between">
            <div className="me-auto">
              <div className="fw-bold">Subheading</div>
              Content for list itemP
            </div>
            <div className="badge bg-primary rounded-pill">14</div>
          </li>
          <li className="list-group-item flex align-items-start justify-content-between">
            <div className="me-auto">
              <div className="fw-bold">Subheading</div>
              Content for list itemP
            </div>
            <div className="badge bg-primary rounded-pill">14</div>
          </li>
        </ol>
      </div>
      <h2>Horizontal</h2>
      <div className="block-content">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item list-group-item-primary">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      <h2>Contextual classes</h2>
      <div className="block-content">
        <ul className="list-group">
          <li className="list-group-item list-group-item-primary">
            A simple primary list group item
          </li>
          <li className="list-group-item list-group-item-secondary">
            A simple secondary list group item
          </li>
          <li className="list-group-item list-group-item-success">
            A simple success list group item
          </li>
          <li className="list-group-item list-group-item-danger">
            A simple danger list group item
          </li>
          <li className="list-group-item list-group-item-info">
            A simple info list group item
          </li>
          <li className="list-group-item list-group-item-light">
            A simple light list group item
          </li>
          <li className="list-group-item list-group-item-dark">
            A simple dark list group item
          </li>
          <li className="list-group-item">A simple default list group item</li>
        </ul>
      </div>
      <div className="block-content">
        <ul className="list-group">
          <li className="list-group-item list-group-item-action list-group-item-primary">
            A simple primary list group item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-secondary">
            A simple secondary list group item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-success">
            A simple success list group item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-danger">
            A simple danger list group item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-info">
            A simple info list group item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-light">
            A simple light list group item
          </li>
          <li className="list-group-item list-group-item-action list-group-item-dark">
            A simple dark list group item
          </li>
          <li className="list-group-item list-group-item-action">
            A simple default list group item
          </li>
        </ul>
      </div>
      <h2>With badges</h2>
      <div className="block-content">
        <ul className="list-group" style={{ width: "40%" }}>
          <li className="list-group-item flex align-items-center justify-content-between">
            A list item
            <div className="badge rounded-pill bg-primary">14</div>
          </li>
          <li className="list-group-item flex align-items-center justify-content-between">
            A list item
            <div className="badge rounded-pill bg-primary">14</div>
          </li>
          <li className="list-group-item flex align-items-center justify-content-between">
            A list item
            <div className="badge rounded-pill bg-primary">14</div>
          </li>
        </ul>
      </div>
      <h2>Custom content</h2>
      <div className="block-content">
        <ul className="list-group" style={{ width: "40%" }}>
          <a
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div className="mb-5 flex align-items-center justify-content-between">
              <h5>List Group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-5">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="mb-5 flex align-items-center justify-content-between">
              <h5>List Group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-5">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="mb-5 flex align-items-center justify-content-between">
              <h5>List Group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-5">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
        </ul>
      </div>
      <h2>Checkboxes and radios</h2>
      <div className="block-content">
        <ul className="list-group" style={{ width: "40%" }}>
          <li className="list-group-item">
            <input
              type="checkbox"
              className="form-check-input mr-10"
              value=""
              aria-label="..."
            />
            First checkbox
          </li>
          <li className="list-group-item">
            <input
              type="checkbox"
              className="form-check-input mr-10"
              value=""
              aria-label="..."
            />
            First checkbox
          </li>
        </ul>
      </div>
    </>
  );
}
