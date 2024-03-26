import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Signup from "../Auth/Signup"

function nav() {
  return (
   <>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 px-5 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-secondary">Products</Link></li>
        <li><Link to="/addProducts" className="nav-link px-2">Add Products</Link></li>
        <li><Link to="/apdateProducts" className="nav-link px-2">Update Products</Link></li>
        <li><Link to="/profile" className="nav-link px-2">Profile</Link></li>
  
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <Signup/>

        
      </div>
    </header>
   </>
  )
}

export default nav