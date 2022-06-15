import React, { useState } from "react";
import TooltipItem from "../../Tooltips";

export default function ModalLive2(props) {
  const [active, setActive] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(false);
  const handleClose = (e) => {
    const modal = e.target.classList.contains("show");
    console.log(modal);
    const modal_id = e.target.getAttribute("id");
    console.log(modal_id);
    if (modal && modal_id === "example-modal") {
      setActive(false);
    }
    if (modal_id === "staticBackdrop") {
      setTimeout(() => {
        document.getElementById("staticBackdrop").classList.add("modal-static");
      }, 200);
      setTimeout(() => {
        document
          .getElementById("staticBackdrop")
          .classList.remove("modal-static");
      }, 400);
    }
  };
  const handleTooltip = (e) => {
    e.preventDefault();
    setActiveTooltip(!activeTooltip);
  };
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#${props.id}`}
        onClick={() => setActive(true)}
      >
        Launch demo modal
      </button>
      <div
        className={`modal fade ${active ? "show" : ""}`}
        id={props.id}
        aria-labelledby="example-modal-label"
        aria-hidden="true"
        tabIndex="-1"
        onClick={handleClose}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Modal title</div>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="close"
                onClick={() => setActive(false)}
              ></button>
            </div>
            <div className="modal-body">
              <h5>Popover in a modal</h5>
              <p>
                This
                <a
                  href="#"
                  className="btn btn-secondary"
                  title="Popover title"
                  content="Popover body content is set this attribute"
                  aria-label="Close"
                  onClick={handleTooltip}
                >
                  Button
                </a>{" "}
                <div
          className={`popover fade bs-popover-end ${
            activeTooltip ? "show" : ""
          }`}
        >
          <div className="popover-arrow"></div>
          <div className="popover-header">Popover title</div>
          <div className="popover-body">
            Popover body content is set in this attribute.
          </div>
        </div>
                triggers a popover on click
              </p>
            </div>
            <modal className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save Changes
              </button>
            </modal>
          </div>
        </div>
       
      </div>
    </>
  );
}
