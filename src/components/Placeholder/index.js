import React from "react";

export default function PlaceholderItem(props) {
  return (
    <div>
      <span className={`placeholder col-12 ${props.property}`}></span>
    </div>
  );
}
