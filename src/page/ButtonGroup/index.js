import React, { useState } from "react";
import ItemCheckBox from "../../components/ButtonGroup/Checkbox/ItemCheckBox";
import Checkbox from "../../components/ButtonGroup/Checkbox/ItemCheckBox";
import ListCheckBox from "../../components/ButtonGroup/Checkbox/ListCheckBox";
import ListRadio from "../../components/ButtonGroup/Radio/ListRadio";
import Toolbar from "../../components/ButtonGroup/Toolbar";

export default function ButtonGroup() {
  const [activeCheckBox, setActiveCheckBox] = useState(false);
  const HandleCheckbox = (e) => {
    console.log(e.target.checked);
    setActiveCheckBox(e.target.checked);
  };
  return (
    <>
      <h2>Basic example</h2>
      <div className="block-content">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            Left
          </button>
          <button type="button" className="btn btn-primary">
            Middle
          </button>
          <button type="button" className="btn btn-primary">
            Right
          </button>
        </div>
      </div>
      <div className="block-content">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary active"
            aria-current="page"
          >
            Left
          </button>
          <button type="button" className="btn btn-primary">
            Middle
          </button>
          <button type="button" className="btn btn-primary">
            Right
          </button>
        </div>
      </div>
      <h2>Mixed styles</h2>
      <div className="block-content">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-success">
            Right
          </button>
        </div>
      </div>
      <h2>Outlined styles</h2>
      <div className="block-content">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button className="btn btn-outline-primary">Left</button>
          <button className="btn btn-outline-primary">Middle</button>
          <button className="btn btn-outline-primary">Right</button>
        </div>
      </div>
      <h2>Checkbox and radio button groups</h2>
      <div className="block-content">
        <ListCheckBox />
      </div>
      <div className="block-content">
        <ListRadio />
      </div>
      <h2>Button toolbar</h2>
      <div className="block-content">
        <Toolbar></Toolbar>
      </div>
      <h2>Vertical variation</h2>
      <div className="block-content">
        <div className="btn-group" role="group">
          <div className="btn-group-vertical">
            <button className="btn btn-primary" type="button">
              Button
            </button>
            <button className="btn btn-primary" type="button">
              Button
            </button>
            <button className="btn btn-primary" type="button">
              Button
            </button>
            <button className="btn btn-primary" type="button">
              Button
            </button>
            <button className="btn btn-primary" type="button">
              Button
            </button>
            <button className="btn btn-primary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
