import React from "react";
import react from "../img/react.png";
import desarrollo from "../img/web.webp";
import mobile from "../img/mobile.png";



export const Habilidades = () => {
  return (
    <div className="habilidades-main">
      <div className="">
        <img src={desarrollo} alt="" width={200} />
       <div className="hab-box">
       <p >Desarrollo Web  
       
       </p>
       </div>
      </div>
     
      <div className="hab-box">
        <img src={mobile} alt="" width={200} />
        <p>Desarollo Mobile 
            
        </p>
      </div>
     
     

    </div>
  );
};
