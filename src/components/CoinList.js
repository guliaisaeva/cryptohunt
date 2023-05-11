import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import {  useNavigate } from 'react-router-dom';

function CoinList() {
const navigate= useNavigate();
  const [Coins,setCoins]=useState([]);
  const [searchResults,setSearchResults]=useState([]);
  const fetchCoins=()=>{
  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en").then((data)=>{
       setCoins(data.data);
      //  setSearchResults(data.data);
  })}
  const handleSearch=(search)=>{
   const filtered_result=Coins.filter((item)=>{
      return item.symbol.includes(search) || item.name.includes(search);
    });
    setSearchResults(filtered_result);
  };
  useEffect(()=>{
    fetchCoins()
  },[]);
 if(!Coins.length > 0) return <Loader/>
  return (
    <div  className='w-[90%] mx-auto mt-5'><input type="text" className='w-full' onInput={(e)=>handleSearch(e.target.value)}/>
    <table className='w-[90%] mx-auto mt-5'>
    <thead className='bg-yellow-500 text-left'>
      <tr>
      <td className='rounded-l pl-4'> Coins</td>
        <td>Price</td>
        <td>24 hrs</td>
        <td className='rounded-r'>Change Market Cap</td>
      </tr>

        </thead><tbody className='w-full'>
          {searchResults.map((item)=>{
            return(

              <tr onClick={()=>navigate('/coin/'+item.id)} className=' hover:cursor-pointer hover:bg-neutral-700 text-white text-sm border-b border-neutral-400'>
              <td className='flex py-3'>
                <img src={item.image} alt="img" className='w-10 h-10 mr-5' />
              <p>{item.name}</p>
              <p>{item.symbol}</p>
              </td>
              <td>{item.current_price}</td>
              <td>{item.price_change_percentage_24h}</td>
              <td>{item.market_cap}</td>
          </tr>

            )
          })}

            </tbody>
            </table>
            </div>
  )
}

export default CoinList
