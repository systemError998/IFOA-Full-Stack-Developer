import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' //Componente che inietta elementi nella mia applicazione
import { store } from './store'       //Inietto store nella mia app (tramite provider)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >  {/* //Metto lo store a disposizione di tutti componenti in App */}
    <App />
  </Provider>
)
