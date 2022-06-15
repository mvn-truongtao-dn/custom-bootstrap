import React from "react";

export default function Forms() {
  return (
    <div className="dropdown-menu">
      <form className="p-20 ">
        <div className="mb-10">
          <label htmlFor="example-dropdown-form-email1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            id="example-dropdown-form-email1"
            className="form-control"
          />
        </div>
        <div className="mb-10">
          <label
            htmlFor="example-dropdown-form-password1"
            className="form-label"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="example-dropdown-form-password1"
            className="forrm-control"
          />
        </div>
        <div className="mb-10">
          <div className="form-check flex align-items-center">
            <input
              type="checkbox"
              className="form-check-input"
              id="dropdown-check"
            />
            <label htmlFor="dropdown-check" className="form-check-label">
              Remember me
            </label>
          </div>
        </div>
        <button className="btn btn-primary">Sign in</button>
      </form>
      <div className="dropdown-divider"></div>
      <a href="#" className="dropdown-item">
        New around here? Sign up
      </a>
      <a href="#" className="dropdown-item">
        Forgot password?
      </a>
    </div>
  );
}
