import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if user data exists in localStorage
    const userDataFromStorage = JSON.parse(localStorage.getItem("user"));
    if (userDataFromStorage) {
      setName(userDataFromStorage.name);
      setEmail(userDataFromStorage.email);
      setPassword(userDataFromStorage.password);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log(`${name} ${email} ${password}`);
  
    const userData = {
      name: name,
      email: email,
      password: password,
    };
  
    axios
      .post("http://localhost:8000/signup", userData)
      .then((response) => {
        const userDataFromServer = response.data;
        if (userDataFromServer && userDataFromServer._id) { 
          console.log("Signup successful. User ID:", userDataFromServer._id);
          localStorage.setItem("user", JSON.stringify(userDataFromServer));
          window.location.reload();
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary mx-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        Sign up
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="signupModalLabel">
                Sign up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* signup body */}

            <div className="modal-body p-5 ">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="name"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  Sign up
                </button>
                <small className="text-body-secondary">
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
            {/* signup body */}
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
