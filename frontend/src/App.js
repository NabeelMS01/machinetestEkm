 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCategories from "./Components/AllCategories/AllCategories";
import { ComponentContext } from "./context/context";
function App() {
  return (

  <ComponentContext.Provider >
 <BrowserRouter>
      <Routes>
    <Route path={'/'} element={ <AllCategories/>} />

      </Routes>
    
    </BrowserRouter>

  </ComponentContext.Provider>
   
  );
}

export default App;
