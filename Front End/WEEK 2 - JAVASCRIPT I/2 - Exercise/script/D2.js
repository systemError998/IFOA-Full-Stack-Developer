/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/* let x = Number(prompt("Scrivi un numero"))
let y = Number(prompt("Scrivi un numero"))

if (x > y) {
  console.log(x + " è maggiore di " + y)
} else {
  console.log(y + " è maggiore di " + x)
} */



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = Number(prompt("Inserisca un numero prego"));

if (a !== 5 ) {
  console.log("not equal")
} else {console.log("Il numero è uguale a 5")} */



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let num = Number(prompt("Inserisci un numero per sapere se è divisibile per 5"))

if (num % 5 == 0) {
  console.log("Il numero è divisibile per 5")
} else {console.log("Il numero non è divisibile per 5")} */



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione 
  sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let num1 = Number(prompt("Inserisca un numero prego"))
let num2 = Number(prompt("Inserisca un altro numero prego"))

if ( num1===8 || num2===8 || num1+num2===8 || num1-num2===8 || num2-num1===8 ) {
  console.log(true)
} else {console.log(false)} */



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione 
    ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart = Number(prompt("Quanto è il totale del carrello?"))

if (totalShoppingCart>50) {
  console.log("Hai diritto alla spedizione gratuita e il totale da pagare è " + totalShoppingCart)
} else { console.log("Non hai diritto alla spedizione gratuita pertanto il totale è " , totalShoppingCart + 10)}
 */


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart = Number(prompt("Quanto è il totale del carrello?"));  
let discount = (totalShoppingCart)/100*20;
let BlackFriday = (totalShoppingCart - discount)

console.log("Lo sconto è di Euro " + discount); 
console.log("Pertanto il totale è di " + BlackFriday)

if (BlackFriday>50) {
  console.log("Hai diritto alla spedizione gratuita e il totale da pagare è " + BlackFriday)
} else { console.log("Non hai diritto alla spedizione gratuita pertanto il totale è " , BlackFriday + 10) } */




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let x = 5;
let y = 10;
let z = 15;

if (x>y){                         //x>y
  if(y>z) {                       //y>z
    console.log( x , y , z )
  } else console.log( x , z , y)  //z>y
} else if (y>x) {
    if (y>z) 
}


if (z>x) {
  if (x>y) {
    console.log(z , x , y)
  } else { console.log(z , y , x)}
} 
BASTA NON NE POSSO PIU */



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = prompt("Inserisci un valore")

if (isNaN(a)) {
  console.log("Il valore fornito non è un numero")
} else { console.log("Il valore fornito è un numero") } */



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let number = Number(prompt("Inserisci un numero per verificare se è pari o dispari"));

if (number % 2 == 0 ) {
  console.log("Il numero " + number + " è pari ")
} else { console.log("Il numero " + number + " è dispari ");} */



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
/*   let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
 */
/* SCRIVI QUI LA TUA RISPOSTA */
// JavaScript legge riga per riga 
/* let val = 7

  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'  // Aggiunge la proprietà city con valore Toronto all'oggetto me
console.log(me) */



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'  // Aggiunge la proprietà city con valore Toronto all'oggetto me
console.log(me)

delete me.lastName
console.log(me); */



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let skills = ['javascript', 'html', 'css']

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'  // Aggiunge la proprietà city con valore Toronto all'oggetto me
console.log(me)

delete me.lastName
console.log(me);

me.skills.pop();
console.log("L'elemento eliminato dall'array è ") //Come si ritorna il valore eliminato dell'array????
console.log(me.skills) */



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr1 = []

arr1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr1) */



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* let arr1 = []

arr1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr1)

arr1.splice(9, 1, 100)
console.log("Il nuovo array è " + arr1) */


/* let a = 18;
let b = 12;
let c = 8;

if (a>b) 
  if (a>c) 
    console.log("il numero maggiore è " + a); 
   else console.log("il numero maggiore è " + c); 
    else if (b>c) 
      console.log("il numero maggiore è " + b)
        else  console.log("il numero maggiore è " + c);  */


        





  

       

