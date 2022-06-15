import React from "react";
import ItemCheckBox from "../ItemCheckBox";

export default function ListCheckBox() {
  const ArrayCheckBox = ["Checkbox1", "Checkbox2", "Checkbox3"];
  console.log(ArrayCheckBox.length);

  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic checkout toggle button group"
    >
      {ArrayCheckBox.map((item, index) => (
        <ItemCheckBox key={index} item={item} id={index + 1} />
      ))}
    </div>
  );
}
