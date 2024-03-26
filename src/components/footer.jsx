import React from "react";
import "../App.css"
import logo from "../assets/Untitled_logo 1.png";

export default function Footer(){
    return(
        <>
        <div className="footer-Box">
            <div><img src={logo} /></div>
            <div>
                <h4> Our Store</h4>     
            </div>
            <div>
                <h4>Contact Us</h4>
                
            
            </div>
            <div>
                <h4>Comming Soon On</h4>
                
            
            </div>
        </div>
        </>
    )
}