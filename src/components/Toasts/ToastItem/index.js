import React, { useState } from "react";

export default function ToastItem(props) {
console.log(props.item);
  const [active, setActive] = useState(true);
  const handleClose = (e, id) => {
    const target = e.target.getAttribute("data-bs-dismiss");
    console.log(document.querySelector(`.${target}`));

    // setActive(false);
    setTimeout(() => {
      //   document.querySelector(`.${target}`).classList.add("showing");
      document.getElementById(`live-toast${id}`).classList.add("showing");
    }, 500);
    setTimeout(() => {
      //   document.querySelector(`.${target}`).classList.remove("showing");
      //   document.querySelector(`.${target}`).classList.remove("show");
      //   document.querySelector(`.${target}`).classList.add("hide");
      document.getElementById(`live-toast${id}`).classList.remove("showing");
      document.getElementById(`live-toast${id}`).classList.remove("show");
      document.getElementById(`live-toast${id}`).classList.add("hide");
    }, 1000);
  };
  return (
    <div
      className={`toast mb-10 fade show`}
      role="alert"
      id={`live-toast${props.id}`}
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img src="" alt="" className="rounded me-2" />
        <strong className="me-auto">Bootstrap</strong>
        <small>{props.item.time}</small>
        <button
          className="btn-close"
          type="button"
          aria-label="Close"
          data-bs-dismiss="toast"
          onClick={(e) => handleClose(e, props.id)}
        ></button>
      </div>
      <div className="toast-body">{props.item.description}</div>
    </div>
  );
}
