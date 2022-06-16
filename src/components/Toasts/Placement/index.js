import React, { useState } from "react";

export default function PlacementToast() {
  const [value, setValue] = useState("");
  return (
    <>
      <form>
        <div className="mb-10">
          <label htmlFor="select-toast-placement">Toast placement</label>
          <select
            className="form-select"
            name="select-toast-placement"
            id="select-toast-placement"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="" selected>
              Select a position...
            </option>
            <option value="top-0 start-0">Top left</option>
            <option value="top-0 start-50 translate-middle-x">
              Top center
            </option>
            <option value="top-0 end-0 ">Top right</option>
            <option value="top-50 start-0 translate-middle-y">
              Middle left
            </option>
            <option value="top-50 start-50 translate-middle">
              Middle center
            </option>
            <option value="top-50 end-0 translate-middle-y">
              Middle right
            </option>
            <option value="bottom-0 start-0 ">Bottom left</option>
            <option value="bottom-0 start-50 translate-middle-x ">
              Bottom center
            </option>
            <option value="bottom-0 end-0 ">Bottom right</option>
          </select>
        </div>
      </form>
      <div
        className="bg-dark position-relative bd-example-toast"
        aria-atomic="true"
      >
        <div
          className={`toast-container position-absolute p-10 ${value}`}
          id="toast-placement"
        >
          <div class="toast text-black">
            <div class="toast-header">
              <img src="..." class="rounded me-2" alt="..." />
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </div>
            <div class="toast-body">Hello, world! This is a toast message.</div>
          </div>
        </div>
      </div>
    </>
  );
}
