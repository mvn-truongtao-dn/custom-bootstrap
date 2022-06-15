import React from "react";
import DropDownItem from "../../components/Dropdown/SingleButton";
import NavsTagsItem from "../../components/NavsTags";

export default function NavTag() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <NavsTagsItem></NavsTagsItem>
      </div>
      <h2>Tags</h2>
      <div className="block-content">
        <ul className="nav nav-tags">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link disabled">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>Pill</h2>
      <div className="block-content">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link disabled">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>Pill and justify</h2>
      <div className="block-content">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link disabled">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <h2>Tags with dropdowns</h2>
      <div className="block-content">
        <ul className="nav nav-tags">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Active
            </a>
          </li>
          <li className="nav-item">
            <DropDownItem property=""></DropDownItem>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link disabled">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
