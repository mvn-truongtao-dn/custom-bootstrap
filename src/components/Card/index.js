import React from "react";

export default function CardItem() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
          className="card-img-top"
          alt=""
        ></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle my-5">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the Some quick example text to
            build on the Some quick example text to build on the Some quick
            example text to
          </p>
          <div className="flex align-items-center justify-content-between">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
