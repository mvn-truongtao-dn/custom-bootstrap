import React from "react";
import NavbarOffcanvas from "../../components/Navbar/Offcanvas";

export default function Offcanvas() {
  return (
    <>
      <h2>Offcanvas end</h2>
      <div className="block-content">
        <NavbarOffcanvas property="offcanvas-end" />
      </div>
      <h2>Offcanvas start</h2>
      <div className="block-content">
        <NavbarOffcanvas property="offcanvas-start" />
      </div>
      <h2>Offcanvas top</h2>
      <div className="block-content">
        <NavbarOffcanvas property="offcanvas-top" />
      </div>
      <h2>Offcanvas bottom</h2>
      <div className="block-content">
        <NavbarOffcanvas property="offcanvas-bottom" />
      </div>
    </>
  );
}
