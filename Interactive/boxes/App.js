import React from 'react';
import data from "./data";
import InBox from "./box";

export default function App(){
    const [boxVal, setBoxVal]=React.useState(data)
    
    function toggle(id) {
        const newArr=[...boxVal]
        let temp=newArr[id-1]
        temp.on=!temp.on
        newArr[id-1]=temp
        setBoxVal(newArr)
    } 
    
    const arrayBox=boxVal.map((args)=>{
        return(<InBox key={args.id} on={args.on} toggle={toggle} id={args.id}/>)
    })
    
    return(
        <main className="grid">
            {arrayBox}
        </main>
    )
}

