import { createContext } from "react";
import Child from "./Child"
const Context = createContext("Default Value");


const App=()=> {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <Child/>
    </Context.Provider>
  );
}
export default App