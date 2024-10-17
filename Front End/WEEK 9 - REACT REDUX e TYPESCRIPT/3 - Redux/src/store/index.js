import { createStore } from 'react-redux'
import { storeReducer } from './reducers'

const initialState = [
    {
        "name": "Mario Rossi",
        "username": "mario123",
        "email": "mario.rossi@email.com",
        "password": "securepassword123",
        "phone": "+1234567890",
        "website": "www.mario-rossi.com"
      },
      {
        "name": "Anna Bianchi",
        "username": "anna456",
        "email": "anna.bianchi@email.com",
        "password": "strongpassword456",
        "phone": "+9876543210",
        "website": "www.anna-bianchi.com"
      },

      {
        "name": "Luca Verdi",
        "username": "luca789",
        "email": "luca.verdi@email.com",
        "password": "passwordluca789",
        "phone": "+1122334455",
        "website": "www.luca-verdi.com"
      },
      {
        "name": "Giulia Neri",
        "username": "giulia_123",
        "email": "giulia.neri@email.com",
        "password": "giulia_secure_pw",
        "phone": "+9988776655",
        "website": "www.giulia-neri.com"
      },
      {
        "name": "Marco Giallo",
        "username": "marco_giallo",
        "email": "marco.giallo@email.com",
        "password": "passwordmarco321",
        "phone": "+1123456789",
        "website": "www.marco-giallo.com"
      }
];


//createStore(storeReducer, initialState, middleware)
const store = createStore(storeReducer, initialState)