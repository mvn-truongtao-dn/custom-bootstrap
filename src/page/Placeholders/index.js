import React from "react";
import PlaceholderItem from "../../components/Placeholder";

export default function Placeholder() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <div className="row">
          <div className="col-6 flex">
            <div className="card">
              <img
                src="https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
                alt="..."
                className="card-img-top"
              />
              <div className="card-body flex flex-column">
                <div className="flex-1">
                  <h5 className="card-title">Card title</h5>
                  <div className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </div>
                </div>
                <button className="btn btn-primary align-self-start" type="button">
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <img
                src="https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <div className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </div>
                <div className="card-text placeholder-glow">
                  <span className="placeholder col-5 mr-5"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-3 mr-5"></span>
                  <span className="placeholder col-8"></span>
                  <span className="placeholder col-12"></span>
                </div>
                <button className="btn btn-primary " type="button">
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Example</h2>
      <div className="block-content">
        <PlaceholderItem property=""></PlaceholderItem>
        <PlaceholderItem property="bg-primary"></PlaceholderItem>
        <PlaceholderItem property="bg-secondary"></PlaceholderItem>
        <PlaceholderItem property="bg-success"></PlaceholderItem>
        <PlaceholderItem property="bg-dangers"></PlaceholderItem>
        <PlaceholderItem property="bg-info"></PlaceholderItem>
        <PlaceholderItem property="bg-light"></PlaceholderItem>
        <PlaceholderItem property="bg-dark"></PlaceholderItem>
      </div>
      <h2>Sizing</h2>
      <div className="block-content">
        <PlaceholderItem property="bg-primary placeholder-lg"></PlaceholderItem>
        <PlaceholderItem property="bg-primary placeholder"></PlaceholderItem>
        <PlaceholderItem property="bg-primary placeholder-sm"></PlaceholderItem>
        <PlaceholderItem property="bg-primary placeholder-xs"></PlaceholderItem>
      </div>
      <h2>Animation</h2>
      <div className="block-content">
        <p className="placeholder-glow">
          <PlaceholderItem property="bg-dark"></PlaceholderItem>
        </p>
      </div>
    </>
  );
}
