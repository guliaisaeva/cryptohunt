import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

function SinglePageInfo(props) {
    const [coin,setCoin]=useState([]);
    const fetchCoin=()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/"+ props.id
        ).then((data)=>{
            setCoin(data.data)
        })
    }
    useEffect(()=>{
        fetchCoin()
      },[]);
      if(!coin)return <Loader/>
      else if(coin)
  return (
    <div className='w-full text-white h-[90vh] mx-auto flex flex-col items-center'>
        <img className='w-20 h-20' src={coin.image} alt="coin icon" />
        <h1 className='text-2xl font-bold'>{coin.name}</h1>
    </div>
  )
}

export default SinglePageInfo