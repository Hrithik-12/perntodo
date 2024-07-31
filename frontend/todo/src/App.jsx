
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Listingalltodos from "./components/listingalltodos";
function App() {
  
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/view" element={<Listingalltodos/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
