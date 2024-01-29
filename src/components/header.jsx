import React from "react";
import logo from "../assets/Untitled_logo.jpg";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Navbar"
       style={{  
        Height: "40px",
        backgroundColor: "rgb(255,244,254,1)", 
        display:"flex", 
        justifyContent:"space-around",
        padding:"16px",

        }}>
        <div className="Nav-logo" >
          <img src={logo} style={{width:"120px"}}/>
        </div>
        
        <ul className="navmenu" style={{
            display:"flex", 
            alignItems:"center",
            listStyle:"none",
            gap:"50px",
           fontSize:"18px",
           fontWeight:"200px", 
           color:"#606161"
          }}>
            <li>Home </li>
            <li>About Us</li>
            <li>Teams</li>
            <li>Contact</li>
        </ul>
        <div className="nav-login" style={{display:"flex", alignItems:"center"}}>
            <button style={{
                width:"110px",
                height:"58px",
                outline:"none",
                borderRadius:"60px",
                fontSize:"18px",
                fontWeight:"100px"
            }}>Login</button>
        </div>
      </div>
    </>
  );
}
