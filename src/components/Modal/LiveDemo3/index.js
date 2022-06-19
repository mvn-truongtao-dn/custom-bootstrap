import React, { useState } from "react";

export default function ModalBetween() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(true);
  };
  const handleClickModal2 = () => {
    setActive2(true);
    setActive(false);
  };
  const handleClickModal1 = () => {
    setActive(true);
    setActive2(false);
  };
  return (
    <>
      <div
        className={`modal fade ${active ? "show" : "hide"}`}
        id="example-modal-toggle"
        aria-hidden="true"
        aria-labelledby="example-modal-toggle-label"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="example-modal-toggle-label">Modal 1</h5>
              <button
                className="btn-close"
                type="button"
                aria-label="Close"
                onClick={() => setActive(false)}
              ></button>
            </div>
            <div className="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#example-modal-toggle2"
                onClick={handleClickModal2}
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal fade ${active2 ? "show" : "hide"}`}
        id="example-modal-toggle2"
        aria-hidden="true"
        aria-labelledby="example-modal-toggle-label2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 id="example-modal-toggle-label2">Modal 2</h5>
              <button
                className="btn-close"
                type="button"
                aria-label="Close"
                onClick={() => setActive2(false)}
              ></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#example-modal-toggle"
                onClick={handleClickModal1}
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#example-modal-toggle"
        className="btn btn-primary"
        data-bs-toggle="modal"
        role="button"
        onClick={handleClick}
      >
        Open first modal
      </a>
    </>
  );
}
