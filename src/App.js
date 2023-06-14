import React from "react";
import Header from "./components/Header";
import HomePages from "./pages/HomePages";
import {Routes,Route} from "react-router-dom"
import SingleCoin from "./pages/SingleCoin";
import News from "./components/News";
function App() {
  return (
    <div className="bg-[#000]">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/coin/:id" element={<SingleCoin/>}/>
        <Route path="/news" element={<News/>}/>

      </Routes>
     </div>
  );
}

export default App;
