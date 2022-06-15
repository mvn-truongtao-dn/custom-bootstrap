import React from "react";

export default function ItemRadio(props) {
  console.log(props.activeRadio);
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id={`btnradio${props.id}`}
        autoComplete="off"
        onChange={props.onChange}
      />
      <label
        htmlFor={`btnradio${props.id}`}
        className={`btn btn-outline-primary ${props.activeRadio}`}
      >
        {props.item}
      </label>
    </>
  );
}
