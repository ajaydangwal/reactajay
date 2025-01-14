import React from "react";
import {Routes,Route, Navigate} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./home";
import About from "./about";
import Footer from "./footer";
import Service from "./service";
import Contact from "./contact";
import Navbar from "./header";

const App = () =>{
    return(
      <>
         <Navbar />
         <Routes>
           <Route exact path="/" Component={Home}></Route>
           <Route exact path="/about" Component={About}></Route>
           <Route exact path="/service" Component={Service}></Route>
           <Route exact path="/contact" Component={Contact}></Route>
           
         </Routes>
         <Footer />
      </>
    );
}

export default App;


