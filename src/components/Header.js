import React from 'react'
import {useNavigate} from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  return (
    <header className='flex items-center px-10 py-3 font-bold'>
    <h1 onClick={()=>{navigate('/')}} className='text-yellow-400 flex-grow text-3xl'>CRYPTOHUNT</h1>
    <nav>
        <ul className='text-white flex item-center space-x-5 cursor-pointer'>
            <li>COINS</li>
            <li>EXCHANGES</li>
            <li>NEWS</li>
        </ul>
    </nav>
  </header>
  )
}

export default Header