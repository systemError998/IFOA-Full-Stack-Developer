alert("WE TESTINA");

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti 
di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

var str1 = 'Datatype che rappresenta un testo';
console.log(str1);

var num1 = 10; // Rappresenta un numero
console.log(num1);

var boo1 = true;
console.log(boo1);

var boo2 = false; // rappresenta i valori vero o falso
console.log(boo2)

var empty = null; // rappresenta una variabile vuota
console.log(empty);

var und = undefined // rappresenta una variabile momentaneamente non definita
console.log(undefined);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Anna";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
let b = 20;
let sum = (a + b);

console.log(sum);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = "12";
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* const name = "Cerasoli"; */
console.log("Vedrai l'errore: Identifier 'name' has already been declared, in quanto l'identificatore name è stato già dichiarato precedentemente")


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x -= 4;
console.log(x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);

let diseguaglianza;
diseguaglianza = (name1.toLowerCase() === name2.toLowerCase()) ? "VERO" : "FALSO";
console.log(diseguaglianza);

console.log(name1.toLowerCase() === name2.toLowerCase());

// metodo alternativa 
/* let lowerName1 = name1.toLowerCase();
let lowerName2 = name2.toLowerCase();

console.log(lowerName2);
console.log(lowerName1 === lowerName2);  */


