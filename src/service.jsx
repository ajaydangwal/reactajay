import React from "react";
import Sdata from "./sdata";
import Card from "./card";
const Service = () =>{
    return(
      <>
      <div className="container">
      <div className="row gy-4 mt-2 mb-2">
          {
           Sdata.map((val, ind) => {
              return <Card 
                imgsrc={val.imgsrc}
                title={val.title}
              />
           })
          }
      </div>
        </div>
       
      </>
    );
}

export default Service;