import React, { useState } from "react";
import ItemRadio from "../ItemRadio";

export default function ListRadio() {
  const ArrayRadio = ["radio1", "radio2", "radio3"];
  const [activeIndex, setActiveIndex] = useState(1);

  const renderItemRadio = ArrayRadio.map((item, index) => {
    const activeRadio = index === activeIndex ? "active" : "";
    console.log(activeRadio);
    return (
      <ItemRadio
        activeRadio={activeRadio}
        id={index + 1}
        key={index}
        item={item}
        onChange={() => setActiveIndex(index)}
      />
    );
  });
  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {renderItemRadio}
      </div>
    </>
  );
}
