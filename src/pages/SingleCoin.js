import React from 'react';
import {useParams} from "react-router-dom"
import SinglePageInfo from '../components/SinglePageInfo';
import SinglePageChart from '../components/SinglePageChart';

function SingleCoin() {
  const params= useParams()
  return (
    <div>
      <SinglePageInfo id={params.id}/>
      <SinglePageChart/>
    </div>
  )
}

export default SingleCoin

// https://api.coingecko.com/api/v3/coins/id