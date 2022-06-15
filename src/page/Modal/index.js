import React from "react";
import ModalLive from "../../components/Modal/LiveDemo";
import ModalLive2 from "../../components/Modal/LiveDemo2";

export default function Modal() {
  return (
    <>
      <div className="component-modal">
        <h2>Example</h2>
        <div className="example-modal">
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title">Modal title</div>
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">Modal body text goes here.</div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary mr-10"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>Live Demo</h2>
        <div className="block-content">
          <ModalLive id="example-modal"></ModalLive>
        </div>
        <h2>Static backdrop</h2>
        <div className="block-content">
          <ModalLive id="staticBackdrop"></ModalLive>
        </div>
        <h2>Tooltips and popovers</h2>
        <div className="block-content">
          <ModalLive2 id="example-modal"></ModalLive2>
        </div>
      </div>
    </>
  );
}
