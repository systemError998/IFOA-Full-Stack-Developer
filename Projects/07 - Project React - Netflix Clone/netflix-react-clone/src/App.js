import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import MyNavbar from './components/Navbar';
import MoviesHome from './components/Movies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MoviesHome 
          urlMovies = 'twilight'
          sectionTitle="My Favourite Movies" /> {/* //Props sectionTitle per il titolo della sezione */}
      <MoviesHome 
          urlMovies = 'harry%20potter'
          sectionTitle="Ultime uscite" /> 
      <MoviesHome 
          urlMovies = 'avengers'
          sectionTitle="Da Rivedere" /> 
      <Footer />
    </div>
  );
}

export default App;
