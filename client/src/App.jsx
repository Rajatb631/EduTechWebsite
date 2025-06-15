



import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header  from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import  Home from "./pages/Home.jsx";
import  DsaTutorial  from "./pages/DsaTutorial.jsx";
import ArrayDS from "./pages/DsaTopics/ArrayDS.jsx";
const App = () => {
   return (
      
         <BrowserRouter>
         <Header/>
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/DsaTutorial" element={<DsaTutorial/>}>
               <Route path="array" element={<ArrayDS />} />
               </Route>
             
            </Routes>
            <Footer/>
         </BrowserRouter>
      
   )
}

export default App;
