import React from 'react';


export default function InBox(prop){
    
    const styles = { backgroundColor: prop.on ? "#222222" : "transparent" }
    
    
        return(
            <div style= {styles} onClick={()=>{prop.toggle(prop.id)}} className="innerbox"> </div> 
        )}
    

    
        
