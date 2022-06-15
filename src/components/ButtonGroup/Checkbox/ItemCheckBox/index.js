import React, { useState } from "react";

export default function ItemCheckBox(props) {
  const [activeCheckBox, setActiveCheckBox] = useState(false);

  const HandleCheckBox = (e) => {
    console.log(e.target);    
    setActiveCheckBox(e.target.checked);
  };
  console.log(props);
  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        id={`btncheck${props.id}`}
        autoComplete="off"
        onChange={HandleCheckBox}
      />
      <label
        htmlFor={`btncheck${props.id}`}
        className={`btn btn-outline-primary ${activeCheckBox ? "active" : ""}`}
      >
        {props.item}
      </label>
    </>
  );
}
