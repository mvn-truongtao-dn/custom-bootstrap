import React, { useState } from "react";
import AlertItem from "../../components/Alerts";

export default function Alerts() {
  const [active, setActive] = useState(false);
  const HandleLiveAlert = () => {
    setActive(true);
  };
  const HandleCloseAlert = () => {
    setActive(false);
  };
  return (
    <div className="block-content">
      <AlertItem propreties="primary"></AlertItem>
      <AlertItem propreties="success"></AlertItem>
      <div className="" id="live-alert-placeholder">
        {active ? (
          <div className="alert alert-success">
            Nice, you triggered this alert message!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={HandleCloseAlert}
            ></button>
          </div>
        ) : null}
      </div>
      <button
        onClick={HandleLiveAlert}
        type="button"
        className="btn btn-primary"
        id="live-alert-btn"
      >
        Show live alert
      </button>
    </div>
  );
}
