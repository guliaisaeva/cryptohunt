import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Sidebar from './Sidebar';
function Header() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed]=useState(true);
  return (
    <header className='flex items-center px-10 py-3 font-bold'>
    <h1 onClick={()=>{navigate('/')}} className='text-yellow-400 flex-grow text-3xl'>CRYPTOHUNT</h1>
    <nav className='hidden sm:block'>
        <ul  className='text-white flex item-center space-x-5 cursor-pointer [&>li]:cursor-pointer'>
            <li onClick={()=>navigate("/")}>COINS</li>
            <li onClick={()=>navigate("/")}>EXCHANGES</li>
            <li onClick={()=>navigate("/news")}>NEWS</li>
        </ul>
    </nav>
    <div onClick={()=>setCollapsed(!collapsed)} className='cursor-pointer mr-5 text-red-600 pl-5'>Click</div>
    <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
  </header>
  )
}

export default Header