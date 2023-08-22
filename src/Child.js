import React, { useState } from "react";
import { createContext } from "react";

export default function () {
  const[count,setCount]=useState(0)
  const Context = createContext(count);


  const  Add=()=>{
    setCount(count +1 )

  }

  return <Context.Consumer>
    
    {(value) =>
    <div>
    <button onClick={()=>Add()}>click</button>
     <h1>{value}
     </h1>
     </div>}
    </Context.Consumer>;
}
