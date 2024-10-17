import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Details from './pages/Details'
import Homepage from './pages/Homepage'
import MyNavbar from './components/MyNavbar'

function App() {

  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
