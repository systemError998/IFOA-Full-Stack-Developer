console.log(window);
//BOM
//History ci dice la cronologia dell'utente 
//Geolocation geolocalizza un utente
//GPU caratteristiche della scheda video

//Posso selezionare un NODO html tramite selettori

console.log(window.document)
// Accedo a document HTML , un oggetto di window
console.dir(window.document)
// Accedo a proprietà e metodi JAVASCRIPT


let h1 = window.document.getElementById("title")
console.log(h1.innerText); //Leggo il contenuto di un nodo html
h1.innerText = "Testo modificato con javascript"

console.dir(h1)

let p = document.getElementsByClassName('txt')
console.log(p[0])       //Restituisce un html collection, perchè è una classe
//Con l'indice zero prende solo il primo nodo

let a = document.getElementsByTagName("a")
console.log(a);         //Restituisce anch'esso un html collection, ARRAY DI NODI
 a[0].style.color = "red";
 a[1].style.color = "green";
 a[2].style.color = "yellow"   //Ad ogni elemento applico un color style diverso 



 // querySelector restituisce il nodo 
let h2 = document.querySelector("#title")
console.log(h1);

let p1 = document.querySelector(".txt") //
console.log(p1);

let a1 = document.querySelector("a")
console.log(a1);

//querySelectorAll restituisce una lista di nodi 

let a2 = document.querySelectorAll("a")
console.log(a2);

//Selezionare determinati elementi
let a3 = document.querySelector(a[title="link2"])


// Creare nodi HTML con javascript 

let titolo = document.createElement("h2")
titolo.innerText = "Nodo creato direttamente da js"
titolo.style.textTransform = "uppercase"
console.log(titolo);

//Seleziono un nodo radice presente nella pagina html e stampo nel document ciò che ho creato 
let section1 = document.querySelector(".section1")
section1.style.textAlign = "center"
section1.appendChild(titolo)


// Navigazione del DOM 

let main = (section1.parentNode)
console.log(main);
