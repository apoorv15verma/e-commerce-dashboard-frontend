import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <>
     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-5  border-top" style={{bottom:"0rem"}}>
      <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>

      <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      </a>

      <ul className="nav col-md-4 justify-content-end">
      <li><Link to="/" className="nav-link px-2 link-secondary">Products</Link></li>
        <li><Link to="/addProducts" className="nav-link px-2">Add Products</Link></li>
     
        <li><Link to="/profile" className="nav-link px-2">Profile</Link></li>
      </ul>
    </footer>
    </>
  )
}

export default Footer