import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";


const AppRoutes=()=>{
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={"About Us"} />
        </Routes>
        </Router>
    )
}
export default AppRoutes;