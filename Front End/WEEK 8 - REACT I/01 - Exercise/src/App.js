import './App.css';
import ButtonComponent from './components/button-component';
import ImageComponent from './components/image-component';
import ChiamataFetch from './components/fetch-component'
import TableComponent from './components/table-components'

const users = [
  { nome: "Mario", cognome: "Rossi", età: 25, città: "Roma" },
  { nome: "Anna", cognome: "Verdi", età: 30, città: "Milano" },
  { nome: "Luca", cognome: "Bianchi", età: 22, città: "Napoli" },
  { nome: "Giulia", cognome: "Gialli", età: 28, città: "Firenze" },
  { nome: "Alessio", cognome: "Neri", età: 35, città: "Torino" }
];

function App() {
  return (
    <div className="App">
      <ButtonComponent nomeBtn="Click Me" />
      <ImageComponent imgSrc="https://picsum.photos/200" alt="random image" />
      <ChiamataFetch />
      <TableComponent title="user" users={users}/>
    </div>
  );
}

export default App;
