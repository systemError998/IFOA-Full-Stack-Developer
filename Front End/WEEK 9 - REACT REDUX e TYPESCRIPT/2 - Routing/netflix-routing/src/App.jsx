import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter , Route , Routes } from "react-router-dom";

import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';

import Homepage from './pages/Homepage';
import TVShows from './pages/Tvshow';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <MyNavbar />
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/tvshows' element={<TVShows />}/>
              <Route path='/movie-details/:movieId' element={<MovieDetails />}/>
            </Routes>
          <MyFooter />
      </BrowserRouter>
    </>
  )
}

export default App
