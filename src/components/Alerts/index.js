import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AlertItem(props) {
  return (
    <>
      <div className={`alert alert-${props.propreties}`} role="alert">
        A simple {props.propreties} alert—check it out!{" "}
        <Link to="#" className="alert-link">
          an example link
        </Link>
      </div>
    </>
  );
}
