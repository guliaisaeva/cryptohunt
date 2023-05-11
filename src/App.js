import React from "react";
import Header from "./components/Header";
import HomePages from "./pages/HomePages";
import {Routes,Route} from "react-router-dom"
import SingleCoin from "./pages/SingleCoin";
function App() {
  return (
    <div className="bg-[#000]">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/coin/:id" element={<SingleCoin/>}/>


      </Routes>
     </div>
  );
}

export default App;
