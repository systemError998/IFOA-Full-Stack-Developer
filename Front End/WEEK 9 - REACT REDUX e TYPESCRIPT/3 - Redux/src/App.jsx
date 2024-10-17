import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar'
import Container from 'react-bootstrap/esm/Container';

import Homepage from './pages/Homepage'
import UsersPage from './pages/UsersPage'
import NotFoundPage from './pages/NotFoundPage'



function App() {

  return (
    <>
      <BrowserRouter>
          <MyNavbar />
            <Container>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </Container>
      </BrowserRouter>
    </>
  )
}

export default App
