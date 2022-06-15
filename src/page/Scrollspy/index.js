import React from "react";
import ScrollspyExample from "../../components/Scrollspy/ExampleNavbar";
import NestedNav from "../../components/Scrollspy/NestedNav";

export default function Scrollspy() {
  return (
    <>
      <ScrollspyExample></ScrollspyExample>
      <div className="block-content">
        <NestedNav></NestedNav>
      </div>
    </>
  );
}
