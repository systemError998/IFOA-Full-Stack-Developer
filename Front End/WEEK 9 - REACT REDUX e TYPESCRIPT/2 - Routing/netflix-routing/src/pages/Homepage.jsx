
import React from 'react'
import MoviesHome from '../components/Movies';

export default function Homepage() {
  return (
    <>
        <MoviesHome 
            urlMovies = 'twilight'
            sectionTitle="My Favourite Movies" /> {/* //Props sectionTitle per il titolo della sezione */}
        <MoviesHome 
            urlMovies = 'harry%20potter'
            sectionTitle="Ultime uscite" /> 
        <MoviesHome 
            urlMovies = 'avengers'
            sectionTitle="Da Rivedere" /> 
    </>
  )
}
