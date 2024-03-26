import React from "react";
import "../App.css";
import logo from "../assets/Untitled_logo 1.png";
import { useNavigate } from "react-router-dom";


export default function Header() {
  
  return (
    <>
      <div className="Navbar">
       
         <ul className="navmenu">
            <li>Home </li>
            <li>About Us</li>
            <li>Teams</li>
            <li>Contact</li>
        </ul> 
        <div className="Nav-logo" >
          <img src={logo} />
        </div>
        <div className="nav-login" >
            <button >Login</button>
            <button style={{backgroundColor:"yellowgreen"}}>Register</button>
        </div>
      </div>
    </>
  );
}
