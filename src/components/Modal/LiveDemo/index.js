import React, { useState } from "react";

export default function ModalLive(props) {
  const [active, setActive] = useState(false);
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
      //   document
      //     .getElementById("staticBackdrop")
      //     .classList.remove("modal-static");
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
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
        <div className="modal-dialog modal-dialog-centered">
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
              Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
              Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
              Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
              Hello Hello Hello Hello Hello Hello Hello sdsd Hello Hello Hello
              Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
              Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
              Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
              Hello Hello HelloHello Hello Hello Hello Hello Hello Hello Hello
              Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
