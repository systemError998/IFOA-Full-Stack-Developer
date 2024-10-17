// Dichiarazione di funzioni

const { CategoryChannelChildManager } = require("discord.js");

/* function nomeFunzione (parametri) {
    blocco di istruzioni
    return val
} */


// Invocazione di funzioni
/* nomeFunzione(parametri)  */


// DICHIARAZIONE
function printString() {
    console.log("Hello World");
}

//INVOCAZIONE
printString()  //Basta scrivere il nome della funzione per visualizzarla

//DICHIARAZIONE
function somma(x, y) {
    let sum = x + y;
/*     console.log(sum); */
    return sum;
}
//INVOCAZIONE
let res = somma(3, 9) //userà la funzione somma per sommare i parametri immessi. Posso usare anche prompt
console.log(res);
let sum2 = somma(res, 9)
console.log(sum2);
let str = somma("Ciao", "belli")
console.log(str);

let num = somma(1,2,3)
console.log(num);  //Sommerà solo i primi due perchè due sono le var dichiarate

let und = somma(5)
console.log(und);  //Restituirà NaN

//ARRAY ARGUMENT NELLE FUNZIONI
function func() {
    // arguments.lenght = array che conserva i parametri di una funzione indipendentemente da quanti sono 
    console.log("Parametri di una funzione:" + arguments.length);
}

func(1,2,3,4,5) //invocazione



// Hoisting delle variabili/funzioni

let test;
console.log(test);
test = "CIAONE";

func()          //Pur invocando prima la funzione func essa funzionerò comunque perchè js prende tutte le dichiarazioni e se le porta in "alto"
function func() {   //DICHIARAZIONE DI FUNZIONE
    console.log("ok");
}
func()


//fUNZIONE ESPRESSIONE: creo una variabile con all'interno una funzione

funx()  //Cannot access 'funx' before initialization
let funx= function () {
    console.log("CIAONE");
}


if(condizione) {  //SE LA CONDIZIONE è VERA , CREO LA FUNZIONE, ALTRIMENTI NO 
    function name(params) {
        
    }
}

//ARROW FUNCTION

// let arrowFunc = () => {blocco di istruzioni}

//1
let arrowFunc = () => {
    console.log("Sono un'arrow function");
}
//2
let arrowFunc = () => console.log("Sono un'arrow function");
//3
let arrowFunc = () => "Sono un'arrow function";




//Particolarita di una funzione javascript

let fux = function () {
    return 'Sono una bellissima funzione'
}
let resFux = fux(); 
console.log(resFux);

//ALTERNATIVA: VA BENE LO STESSOOOOOOOOOOOOOOOO
let fux = function () {
    return 'Sono una bellissima funzione'
}
let resFux = fux; 
console.log(resFux());


//Scope di una variabile 

let v1 = "Sono una variabile" // Global scope (scope globale)

{
    let v1 = "Sono una variabile" // Block scope 
}

function fscope() {
    let v1 = "Sono una variabile" // Function scope
}


//Metodi delle stringhe

let stringa = "Ciao sono una stringa"

console.log(stringa.indexOf("una"));  //RESTITUISCE L'INDICE DELLA STRINGA UNA
console.log(stringa.lastIndexOf("una"));  //RESTITUISCE L'ULTIMO INDICE DELLA STRINGA UNA
console.log(stringa.search("una"));
console.log(stringa.slice(5,18)); //stampa dall'indice 5 all'indice 18
console.log(stringa.slice(-8, 0)); //parti a tagliare dalla fine -8
console.log(stringa.substring(5,18)); //identica a slice ma non accetta valori negativi
console.log(stringa.length);
console.log(stringa.replace("s", "e")); //lettera da sostituire,lettera nuova / rimpiazza la prima s della stringa con una e
console.log(stringa.replaceAll("a", "x")); //rimpiazza tutte le a con x
console.log(stringa.toLowerCase());
console.log(stringa.toUpperCase());
console.log(stringa.concat("ARRIVEDERCI")); // alla fine della stringa concateno una nuova parola
console.log(stringa.trim());
console.log(stringa.charAt[2]); //mi stampa la lettera all'indice 2
console.log(stringa.split(" ")); //taglia la stringa nei punti tra parentesi, in questo caso, gli spazi
console.log(stringa.startsWith)


//Metodi libreria Math

let numero = Math.random() * 10;
console.log(numero);
console.log(Math.floor(numero)); //Arrotonda all'intero più basso
console.log((Math.ceil(numero)));

