import SearchBar from '../components/SearchBar';
import CardWrap from '../components/CardWrap';
import TableDays from '../components/TableDays';
import '../components/Components.css'

import { useState } from 'react'
import axios from 'axios';

export default function Homepage() {

  let apiKey = "44b903d1c5402f4f543d056274b90371"
    
  const [ data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [ forecast , setForecast ] = useState([])

  const targetLocation = () => {    //evento di input che passo come prop alla searchbar per cercare
      event.preventDefault()
      setLocation(event.target.value.trim())
  }
  
  const searchLocation = () => {      //evento click che passo a searchbar come prop che cerca la location 
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=it&appid=${apiKey}`)
      .then((response) => { 
          setData(response.data)
          console.log(response.data) 
          setLocation('')  //svuota l'input? come cavolini sott'aceto svuoto l'input?? 
      })
      .catch(error => {
          console.log("errore nella fetch: " + error)
          setLocation('') 
      })
}

  const searchForecast = () => {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&lang=it&appid=${apiKey}`)
      .then((previsioni ) => { 
          setForecast(previsioni.data.list)
          console.log(previsioni.data.list) 
      })
      .catch(error => {
          console.log("errore nella fetch: " + error)      
      })
  }

  return (
    <div>
      <SearchBar 
          location = {location}  
          searchLocation={searchLocation}
          targetLocation={targetLocation}
          searchForecast={searchForecast}
      />
            <CardWrap 
            data = {data} 
        />
        <TableDays 
            forecast= {forecast}
        />
    </div>
  )
}
