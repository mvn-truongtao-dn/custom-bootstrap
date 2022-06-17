import React, { useState } from "react";
import Dropup from "../../components/Dropdown/Dropup";
import Forms from "../../components/Dropdown/Forms";
import DropDownItem from "../../components/Dropdown/SingleButton";
import DropDownItem2 from "../../components/Dropdown/SplitButton";

export default function Dropdown() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <DropDownItem property="btn-secondary"></DropDownItem>
      </div>
      <h2>SingleButton button</h2>
      <div className="block-content flex flex-wrap-wrap gap-1">
        <DropDownItem property="btn-primary"></DropDownItem>
        <DropDownItem property="btn-secondary"></DropDownItem>
        <DropDownItem property="btn-success"></DropDownItem>
        <DropDownItem property="btn-danger"></DropDownItem>
        <DropDownItem property="btn-info"></DropDownItem>
        <DropDownItem property="btn-light"></DropDownItem>
      </div>
      <h2>Split button</h2>
      <div className="block-content">
        <DropDownItem2 property="btn-secondary"></DropDownItem2>
      </div>
      <h2>Sizing</h2>
      <div className="block-content flex align-items-center">
        <DropDownItem property="btn-secondary btn-lg"></DropDownItem>
        <DropDownItem property="btn-secondary btn-sm"></DropDownItem>
      </div>
      <h2>Dark dropdowns</h2>
      <div className="block-content">
        <DropDownItem
          property="btn-secondary"
          property2="dropdown-menu-dark"
        ></DropDownItem>
      </div>
      <div className="block-content">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              Navbar
            </a>
            <DropDownItem
              property="btn-dark"
              property2="dropdown-menu-dark"
            ></DropDownItem>
          </div>
        </nav>
      </div>
      <h2>Dropup</h2>
      <div className="block-content">
        <Dropup property="dropup"></Dropup>
      </div>
      <h2>Dropend</h2>
      <div className="block-content">
        <Dropup property="dropend"></Dropup>
      </div>
      <h2>Dropleft</h2>
      <div className="block-content">
        <Dropup property="dropstart"></Dropup>
      </div>
      <h2>Menu alignment</h2>
      <div className="block-content">
        <DropDownItem
          property="btn-secondary btn-lg"
          property2="dropdown-menu-end"
        ></DropDownItem>
      </div>
      <h2>Forms</h2>
      <div className="block-content">
        <Forms></Forms>
      </div>
    </>
  );
}
