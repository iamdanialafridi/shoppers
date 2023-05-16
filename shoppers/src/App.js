
import { Routes,Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import Navbar from "./components/Navbar";


function App() {
  return (
   <>
   <Navbar />

   
   <Routes>
    <Route exact path="/"  element={<Homepage/>} />
    <Route exact path="*" element= {<Error/>}/>
    <Route exact path="/single-product/:id" element={<SingleProduct/>} />
   </Routes>
   </>
  );
}

export default App;
