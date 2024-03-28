import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navbar from "./components/nav";
import Footer from "./components/Footer";

function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>{" "}
    
        <div >
          {userData ? <Outlet /> : 
          <div
          className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
          tabIndex="-1"
          role="dialog"
          id="modalSignin"
          style={{ minHeight: "79vh" }}
        >
          <h1>home</h1>
          </div>
          }
        </div>
      
      <div >
        <Footer />
      </div>
    </>
  );
}

export default App;
