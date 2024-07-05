import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Connect.css";

const Connect = () => {
  return (
    <div className="mainPage">
      <h1 className="LetsConnect">Connect With Us</h1>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Mobile Number (Optional)"
        aria-label="Mobile Number (Optional)"
      />
      <div className="Query">
        <textarea
          className="query"
          rows={4}
          cols={50}
          maxLength={250}
          placeholder="Query"
        ></textarea>
      </div>
      <button type="button" class="btn btn-success">
        Send Query
      </button>
    </div>
  );
};

export default Connect;
