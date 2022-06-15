import React, { useState } from "react";

export default function LiveToast() {
  const [targetActive, setTargetActive] = useState("");
  const handleOpen = (e) => {
    const array = e.target.getAttribute("id").split("-");
    const target = `${array[0]}-${array[1]}`;
    setTargetActive(target);
    setTimeout(() => {
      document.getElementById(target).classList.add("showing");
    }, 500);
    setTimeout(() => {
      document.getElementById(target).classList.remove("showing");
      document.getElementById(target).classList.remove("hide");
      document.getElementById(target).classList.add("show");
    }, 500);
  };
  setTimeout(() => {
    document.getElementById(targetActive).classList.remove("show");
    document.getElementById(targetActive).classList.add("hide");
  }, 5000);
  const handleClose = (e) => {
    setTimeout(() => {
      document.getElementById(targetActive).classList.add("showing");
    }, 500);
    setTimeout(() => {
      document.getElementById(targetActive).classList.remove("showing");
      document.getElementById(targetActive).classList.remove("show");
      document.getElementById(targetActive).classList.add("hide");
    }, 1000);
    // setTimeout(() => {
    //   document.querySelector(`.${target}`).classList.add("showing");
    // }, 500);
    // setTimeout(() => {
    //   document.querySelector(`.${target}`).classList.remove("showing");
    //   document.querySelector(`.${target}`).classList.remove("show");
    //   document.querySelector(`.${target}`).classList.add("hide");
    // }, 1000);
  };
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        id="live-toast-btn"
        onClick={handleOpen}
      >
        Show live toast
      </button>
      <div className="position-fixed bottom-0 end-0 p-20 z-index-1">
        <div
          className="toast fade hide"
          id="live-toast"
          role="alert"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src="" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="toast1"
              onClick={handleClose}
            ></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </>
  );
}
