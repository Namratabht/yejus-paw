import React from "react";
import image1 from "../assets/gallery/image_1.jpg"

export default function DashBody(){
    
    return(
        <>
        <div className="dash-aboutus">
            <h4>Find your Pet</h4>
            <p></p>
        </div>
        <div className="dash-gallery" style={{height:"30px" ,width:"30px"}}>
            {imgData.map((img)=>{
                return(
                    <img src={img.src}/>
                )
            })}
        </div>
        <div className="dash-services">Our services</div>
        </>
    )
}