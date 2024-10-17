import './App.css';
import FirstComp from './components/firstComp';
import ThirdComp from './components/thirdComp';
import SecComp from './components/secComp';
import { Four, FourTwo } from './components/fourthComp';
import './components/fourthComp'

function App() {
  return (
    <div className="App">
      <FirstComp />
      <SecComp />
      <ThirdComp />
    </div>
  );
}

export default App;
