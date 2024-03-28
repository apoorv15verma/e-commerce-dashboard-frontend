import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Signup from "../Auth/Signup";
import Login from "../Auth/Login";

function Nav() {
  const navigate = useNavigate(); // This hook is used to programmatically navigate to a different route

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate('/'); // Assuming '/' is your home page route
  };

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  px-5 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
           <h1 className="fw-bold mb-0 fs-2">CRUD DashBoard</h1>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Products
            </Link>
          </li>
          <li>
            <Link to="/addProducts" className="nav-link px-2">
              Add Products
            </Link>
          </li>
        
          <li>
            <Link to="/profile" className="nav-link px-2">
              Profile
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          {userData ? (
            <button
              type="button"
              className="btn btn-outline-primary me-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <div>
            <Login/>
            <Signup />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Nav;
