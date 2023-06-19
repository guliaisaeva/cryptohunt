import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import {  useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function CoinList() {
const navigate= useNavigate();
  const [Coins,setCoins]=useState([]);
  const [search,setSearch]=useState('');
  const [page,setPage]=useState(1)
  const fetchCoins=()=>{
  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en").then((data)=>{
  setCoins(data.data);
  // setSearchResults(data.data);
  })}
  const handleSearch=()=>{
   const filtered_result=Coins.filter((item)=>{
      return item.symbol.toLowerCase().includes(search) || item.name.toLowerCase().includes(search);
    });
    return filtered_result;
  };
  useEffect(()=>{
    fetchCoins()
  },[]);

 if(!Coins.length > 0) return <Loader/>
  return (
    <div  className='w-full '><input type="text" className='w-[80%] mx-auto mt-5' onInput={(e)=>setSearch(e.target.value)}/>
    <table className='w-[90%] mx-auto mt-5'>
    <thead className='bg-yellow-500 text-left'>
      <tr>
      <td className='rounded-l pl-4'> Coins</td>
        <td>Price</td>
        <td>24 hrs</td>
        <td className='rounded-r'>Change Market Cap</td>
      </tr>

        </thead><tbody className='w-full'>
          {handleSearch().slice((page-1)*10,(page-1)*10+10).map((item)=>{
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
            <ReactPaginate pageClassName='hover:rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center' previousLabel="<" nextLabel=">" onPageChange={(x)=>setPage(x.selected +1)} className=' my-10 mx-auto w-min text-yellow-500 font-bold text-sm flex items-center space-x-5'
            previousClassName='hover:rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center'  nextClassName='hover:rounded-[50%] hover:bg-neutral-500 w-10 h-10 flex justify-center items-center'
            pageCount={Coins.length/10} />
            <br /><br /><br /><br /><br />
            </div>
  )
}

export default CoinList
