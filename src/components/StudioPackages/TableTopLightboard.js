import React from 'react'
import picture from "../pictures/S66 Standalone Lightboard Studio Package.jpg"



export default function TableTopLightboard () {
    
        return (
            <div style={{display:"flex", justifyContent:"space-between", alignContent:"center", flexWrap:"wrap"}}>
               <h1 style={{margin:"auto", fontSize:"30px"}}>S33 Table Top Lightboard Studio Package</h1>
                  {/* this className is in aap.css */}
               <img className="pic" src={picture}/>           
               </div>
        )
    
}
