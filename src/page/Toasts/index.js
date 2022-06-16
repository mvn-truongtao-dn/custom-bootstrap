import React, { useState } from "react";
import LiveToast from "../../components/Toasts/LiveExample";
import PlacementToast from "../../components/Toasts/Placement";
import ToastStacking from "../../components/Toasts/Stacking";
import ToastItem from "../../components/Toasts/ToastItem";

export default function Toasts() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <ToastItem
          id="3"
          item={{ time: "10 mins ago", description: "Halo" }}
        ></ToastItem>
      </div>
      <h2>Live Example</h2>
      <div className="block-content">
        <LiveToast></LiveToast>
      </div>
      <h2>Stacking</h2>
      <div className="block-content">
        <ToastStacking></ToastStacking>
      </div>
      <h2>Custom content</h2>
      <div className="block-content">
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="flex align-items-center justify-content-between">
            <div className="toast-body">Hello world!</div>
            <button
              className="btn-close pr-20"
              type="button"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <h2>Color schemes</h2>
      <div className="block-content">
        <div className="toast text-white bg-primary">
          <div className="flex align-items-center justify-content-between">
            <div className="toast-body">Hello world!</div>
            <button
              className="btn-close btn-close-white pr-20"
              type="button"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <h2>Placement</h2>
      <div className="block-content">
        <PlacementToast></PlacementToast>
      </div>
    </>
  );
}
