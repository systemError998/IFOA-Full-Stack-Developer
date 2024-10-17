import React from 'react'
import { useParams }  from 'react-router-dom'

import CardWrap from '../components/CardWrap'
import TableDays from '../components/TableDays'

export default function WeatherPage( { data , forecast } ) {

  let { location } = useParams(); 
  console.log(location);

  return (
    <>
      <h1>Weather Page</h1>

    </>
  )
}

