import Container from 'react-bootstrap/Container'
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import './App.css'

import Homepage from './pages/Homepage';
import WeatherPage from './pages/WeatherPage';
import NotFound from './pages/NotFound';

import MyNavBar from './components/MyNavbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Container className='text-center d-flex justify-content-center my-3 bodyApp'>
          <Routes>
            <Route path="/" element={<Homepage />} /> {/* 👈 Renders at /app/ */}
            <Route path="/weather/:location" element={<WeatherPage />} /> {/* 👈 Renders at /app/ */}
            <Route path="/notfound" element={<NotFound />} /> {/* 👈 Renders at /app/ */}
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
