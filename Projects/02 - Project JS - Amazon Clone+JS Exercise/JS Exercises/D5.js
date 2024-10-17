/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
for (i=0; i<pets.length; i++) {
    console.log(pets[i]);
  } 

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let petsAbc = (pets.sort());
console.log(petsAbc);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", 
    questa volta in ordine invertito.
*/

let petsReverse = (pets.reverse());
console.log(petsReverse);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let firstPet = pets.shift();
console.log(firstPet);
pets.push(firstPet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà 
    "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

let licensePlate;
function license () {
for (let i=0; i<cars.length; i++) {
    let targa = (Math.floor(Math.random() * 15899577).toString(16))  
    cars[i].licensePlate = targa;
  } return cars
}
console.log(license());

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let newObj = {
  brand: 'Bmw',
  model: 'Serie 1',
  color: 'white',
  trims: ['titanium', 'style', 'r-line'],
}
cars.push(newObj);  //Aggiungo il nuovo oggetto nell'array cars.
license ()  //Richiamo la funzione per aggiungere la targa alla nuova auto


let oldTrims = []
for (let i=0; i<cars.length; i++) {
  oldTrims.push(cars[i].trims)
  oldTrims[i].pop()
} console.log(oldTrims);      //Nuovo array senza l'ultimo trims


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array 
    "justTrims", sotto definito.
*/

const justTrims = []

let firstTrims;
for (let i = 0; i < cars.length; i++) {   
    let car = cars[i];
    firstTrims = car.trims.shift();
    justTrims.push(firstTrims)
} console.log(justTrims); 


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i=0; i<cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
  console.log("FIZZ"); }
  else console.log("BUZZ");
}  

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let count = 0;
while (count < numericArray.length) {
  console.log(numericArray[count]);
  count++;
  if ( numericArray[count] === 32) {
    console.log("32");
    break
  }
} 

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/


const charactersArray = ['a', 'b', 'c', 'd', 'e']
