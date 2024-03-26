import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navbar from "./components/nav"
import Footer from "./components/Footer";

function App() {
 

  return (
    <>

    <div>
      <Navbar/>
    </div>
      <div style={{minHeight:"70vh"}}>
        <Outlet />
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
