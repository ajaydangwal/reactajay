import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Comman = (props) =>{
  return(
    <>
    <div className="container">
      <div className="row">
         <div className="col-lg-6 col-md-12 col-sm-12">
             <p>{props.name} </p>
             <h2>{props.nametwo}</h2>
             <img src={props.imgsrc} alt="image"/>
             <NavLink to={props.visit} ><FaFacebookF style={{ fontSize: '30px', color: 'red' }} /><FaFacebookF /></NavLink>
             
         </div>
         <div className="col-lg-6 col-md-12 col-sm-12">
              
          </div>
      </div>
      </div>  
    </>
  );
}

export default Comman;