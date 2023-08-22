import { createContext } from "react";
import Child from "./Child"
import useBearStore from "./Store";



const App=()=> {
  function BearCounter() {
    const bears = useBearStore((state) => state.bears)
    return <h1>{bears} around here ...</h1>
  }


  return (
    <div>
    <BearCounter/>
    </div>
  );
}
export default App