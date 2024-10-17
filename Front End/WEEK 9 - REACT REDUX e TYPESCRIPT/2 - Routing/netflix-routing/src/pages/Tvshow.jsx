
import React from 'react'
import MoviesHome from '../components/Movies';

export default function TVShows() {
  return (
    <>
        <MoviesHome 
            urlMovies = 'breaking%20bad'
            sectionTitle="My Favourite Movies" /> {/* //Props sectionTitle per il titolo della sezione */}
        <MoviesHome 
            urlMovies = 'lost'
            sectionTitle="Ultime uscite" /> 
        <MoviesHome 
            urlMovies = 'better%20call%20saul'
            sectionTitle="Da Rivedere" /> 
    </>
  )
}