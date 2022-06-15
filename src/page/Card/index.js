import React from "react";
import CardItem from "../../components/Card";

export default function Card() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <CardItem />
      </div>
      <h2>Listgroups</h2>
      <div className="block-content">
        <div className="card" style={{ width: "18rem" }}>
          <div onHove className="card-header">
            Featured
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-footer">Footer</div>
        </div>
      </div>
      <h2>Header and footer</h2>
      <div className="block-content">
        <div className="card" style={{ width: "18rem" }}>
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <div className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="block-content">
        <div className="card text-center" style={{ width: "100%" }}>
          <div className="card-header">Featured</div>
          <div className="card-body">
            <div className="card-title">Special title treatment</div>
            <div className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
      <h2>Sizing</h2>
      <h4>Using grid markup</h4>
      <div className="block-content">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <div className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </div>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <div className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </div>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="block-content">
          <div className="card w-75">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <h2>Navigation</h2>
        <div className="block-content">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tags card-header-tags">
                <li className="nav-item">
                  <a href="#" className="nav-link active" aria-current="true">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" aria-current="false">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link disabled">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="block-content">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                  <a href="#" className="nav-link active" aria-current="true">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" aria-current="false">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link disabled">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="block-content">
          <div className="card">
            <img
              src="https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
              className="card-img-top"
              alt=""
            ></img>
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle my-5">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the Some quick example text
                to build on the Some quick example text to build on the Some
                quick example text to
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <h2>Card styles</h2>
        <h4>Background and color</h4>
        <div className="block-content">
          <div
            className="card bg-primary text-white"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </div>
            </div>
          </div>
        </div>
        <h2>Cart layout</h2>
        <h4>Card groups</h4>
        <div className="block-content">
          <div className="card-group">
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
          </div>
        </div>
      </div>
    </>
  );
}
