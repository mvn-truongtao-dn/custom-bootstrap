import React, { useState } from "react";

export default function Collapse() {
  const [activeCollapse, setActiveCollapse] = useState(false);
  const [activeHorizontal, setActiveHorizontal] = useState(false);
  const [activeMulti, setActiveMulti] = useState(false);
  const handleClickCollapse = (e) => {
    e.preventDefault();
    setActiveCollapse(!activeCollapse);
    if (e.target.getAttribute("aria-expanded") === "true") {
      e.target.setAttribute("aria-expanded", false);
    } else {
      e.target.setAttribute("aria-expanded", true);
    }
  };
  const handleCollapseHorizontal = (e) => {
    setActiveHorizontal(!activeHorizontal);
    if (e.target.getAttribute("aria-expanded") === "true") {
      e.target.setAttribute("aria-expanded", false);
    } else {
      e.target.setAttribute("aria-expanded", true);
    }
  };
  const HandleMultiCollapse = (e) => {
    e.preventDefault();
    setActiveMulti(!activeMulti);
    const array = e.target.getAttribute("aria-controls").split(" ");
    for (var i = 0; i < array.length; i++) {
      if (document.getElementById(array[i]).classList.contains("show")) {
        document.getElementById(array[i]).classList.remove("show");
        document
          .querySelector(`#${array[i]} .card-collapse`)
          .classList.remove("show");
      } else {
        document.getElementById(array[i]).classList.add("show");
        document
          .querySelector(`#${array[i]} .card-collapse`)
          .classList.add("show");
      }
    }
    if (e.target.getAttribute("aria-expanded") === "true") {
      e.target.setAttribute("aria-expanded", false);
    } else {
      e.target.setAttribute("aria-expanded", true);
    }
  };
  return (
    <>
      <h2>Examples</h2>
      <div className="block-content">
        <p>
          <a
            href="#collapseExample"
            className="btn btn-primary"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={handleClickCollapse}
          >
            Link with href
          </a>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-controls="collapseExample"
            aria-expanded="false"
            onClick={handleClickCollapse}
          >
            Button with data-bs-target
          </button>
        </p>

        <div
          className={`collapse ${activeCollapse ? "show" : ""}`}
          id="collapseExample "
        >
          <div
            className={`card card-body card-collapse ${
              activeCollapse ? "show" : ""
            }`}
          >
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <h2>Horizontal</h2>
      <div className="block-content">
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-width-example"
            aria-expanded="false"
            onClick={handleCollapseHorizontal}
          >
            Toggle width collapse
          </button>
        </p>
        <div style={{ minHeight: "120px" }}>
          <div
            className={`collapse collapse-horizontal ${
              activeHorizontal ? "show" : ""
            }`}
            id="collapse-width-example"
          >
            <div className="card card-body">
              This is some placeholder content for a horizontal collapse. It's
              hidden by default and shown when triggered.
            </div>
          </div>
        </div>
      </div>
      <h2>Multiple targets</h2>
      <div className="block-content">
        <p>
          <a
            href="#multi-collapse-example1"
            className="btn btn-primary"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="multi-collapse-example1"
            onClick={HandleMultiCollapse}
          >
            Toggle first element
          </a>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multi-collapse-example2"
            aria-expanded="false"
            aria-controls="multi-collapse-example2"
            onClick={HandleMultiCollapse}
          >
            Toggle second element
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multi-collapse-example1 multi-collapse-example2"
            onClick={HandleMultiCollapse}
          >
            Toggle both element
          </button>
        </p>
        <div className="row">
          <div className="col-6">
            <div
              className={`collapse multi-collapse`}
              id="multi-collapse-example1"
            >
              <div className="card card-body card-collapse">
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className={`collapse multi-collapse`}
              id="multi-collapse-example2"
            >
              <div className="card card-body card-collapse">
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
