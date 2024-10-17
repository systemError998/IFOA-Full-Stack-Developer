import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import ContactPage from './pages/ContactPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* Inserirai qui tutte le rotte della tua app */}
      <NavbarComp />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}/> {/* 👈 / = localhost.3000 */}
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
