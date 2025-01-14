import React from "react";
import Comman from "./comman";
import Imagetwo from "./images/react2.png";

const About = () =>{
  return(
    <>
    <Comman 
    name="It is Our About Page" 
    nametwo="This is About Page Ajay" 
    imgsrc={Imagetwo} 
    visit="/service"
    btname="visit services"
    />
    </>
  );
}

export default About;