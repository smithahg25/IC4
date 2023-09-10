import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); 

  // Change Handler
  const changHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name1]: val });
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault(); 

    if (!data.email || !data.password) {
      setErrorMessage("Please enter all the details."); 
      return; 
    }

    alert("You are signup successfully");
    setErrorMessage(""); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" id="b-img">
      <div className="p-5 rounded bg-white border border-3 border-danger">
        <form onSubmit={submitHandler}>
          <h2 className="text-center">Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="username">User Name</label>
            <input
              type="username"
              placeholder="Enter your Name"
              className="form-control"
              name="username"
              onChange={changHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              name="email"
              onChange={changHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              name="password"
              onChange={changHandler}
            />
          </div>
          {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
          <div className="d-grid">
            <button className="btn btn-danger" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
