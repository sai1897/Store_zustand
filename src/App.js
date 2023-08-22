import { createContext, useEffect } from "react";
import Child from "./Child"
import useBearStore from "./Store";



const App=()=> {

  
  const st = useBearStore()
  
  function BearCounter() {
    const bears = useBearStore((state) => state.bears)
    return <h1>{bears} around here ...</h1>
  }


  return (
    <div onClick={()=>{
      st.setVal("gg")
    }}>
      {st.bears}
    <BearCounter/>
    </div>
  );
}
export default App