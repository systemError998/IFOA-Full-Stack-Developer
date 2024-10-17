var v; //dichiarazione di una variabile
v = 'valore'; //inizializzazione di una variabile
var v = 'valore'; //dichiarazione e inizializzazione insieme

j = 44; // dichiarazione implicita, DA EVITARE  

 
// testo da stampare nella console del browser
console.log("Hello World!")
console.log("E' consigliabile inserire il codice js in un file esterno, con tag script all'interno del body, solitamente all'ultima riga")

// le variabili sono dei contenitori, al cui interno inseriamo un valore
// Numeri | Stringhe | Boolean | Null | Undefined 
var num1 = 25;
var num2 = 15.5;
var str1 = "Questo è un 'testo'";
var str2 = 'Ma anche questo è un "testo"';
// \ CARATTERE DI ESCAPE: il backslash si usa prima di simboli come virgolette, apici ecc
var bol1 = true;
var bol2 = false;
var emp1 = null;
var emp2 = undefined;

var somma = num1 + num2;

console.log(somma);
console.log(str1 + (num1 + num2));

console.log(bol1)
console.log(bol2)
console.log(emp1);


// var è una variabile globale e viene visualizzata ovunque nel codice
var test = "Test"; // con var riserva uno spazio di memoria e viene visualizzata ovunque
{
    let test = "Nuovo test";
    console.log(test);
    let innerTest = "CIAONE";
}
console.log(test);

var test = "Nuovizzimo test";
console.log(test);

/* console.log(innerTest); */ // _error is not defined_, perchè questa variabile è definita solo dentro il blocco sopra

const COS = "Sono una costante";
console.log(COS);

/* COS = "Sono una costantina";
console.log(COS); */ /*  _error_ Assignment to constant variable. perchè una costante non è una variabile e non può essere modificata */

let name = "Anna";
console.log(typeof name); //nella console visualizzeerò il type of della variabile. 
name = 20;
console.log(name);

//OPERATORI

n1 = 5;
n2 = '10';

// OPERATORI ARITMETICI

// OPERATORI LOGICI true/false

n1 = 5;
n2 = '10';
n3 = 20;

console.log(n1 == n2);  //false
console.log(n1 === n2) //false, verifica anche il tipo 
console.log(n1 < n2);  //true
console.log(n1 > n2);  //false
console.log(n1!=n2);  //true 
console.log(n1!==n2)   //true 

console.log(n1 == n2)

// OPERATORE TERNARIO
// (condizione) ? true : false 

let eta = 15;
let accesso = (eta >= 18) ? 'Accesso consentito' : 'Accesso negato'
console.log(accesso);
