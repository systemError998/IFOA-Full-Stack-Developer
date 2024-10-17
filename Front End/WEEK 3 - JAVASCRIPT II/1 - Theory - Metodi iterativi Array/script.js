// SPREAD OPERATOR

const { BaseGuildTextChannel } = require("discord.js");

let arr1 = [5,7,9]
let arr2 = Object.assign([], arr1)
let arr3 = [6, ...arr1, 3]

console.log(...arr1);
console.log(arr2);
console.log(arr3);

let obj1 = {
    name: "Anna"
    lastname: "Rossi"
    age: 25
    city: "Roma"
}

let obj2 = Object.assign({}, obj1)  //Clono con ObjectAssign
let obj3 = {   
    ...obj1,          //Clono l'obj1
    city: "Milano"    //Modifico solo la città 
    patente: true     //Aggiungo una nuova proprietà solo al nuovo oggetto
}

// Rest parameter

function func() {
    console.log(arguments);  //Array che contiene tutti gli argomenti passati alla funzione
}
func(9,5,6,7,3,2,7)
//is the same
function func2 (...args) {
    console.log(args);
}

func2(4,6,43,3,2,)

//DESTRUCTURING OPERATOR 

let objekt = {
    name: "Anna",
    surname: "Rossi",
    city: "Roma"
}

//ciclo for in per stampare le proprietà di un oggetto
for (const key in objekt) {
    console.log(objekt[key]);  //is the same objekt.name , objekt.surname
    }


let { city, name } = objekt
// se destrutturo un oggetto metto la destrutturazione in parentesi {}

// DESTRUCTURING ARRAY

let array = [2,3,4]
let [x,y,z] = array  //crea le variabili dove mette i valori dell'array x=2, y=3


// TEMPLATE LITERALS ```



// Array Method Advanced

let bestArray = ["Pippo", "Pluto", "Baby", "Karina", "Mia"];

for (let i=0; i<bestArray.length;i++){
    console.log(bestArray[i]);
}
//Is the same V

//Ciclo FOR IN    legge le chiavi (e volendo i valori) di un array
for (const key in bestArray) {
    console.log(key);                   //stampa l'indice
    console.log(bestArray[key]);       //stampa il valore 
}

//Ciclo FOR OF   legge solo i valori di un array 

for (const valore of objekt) {
    console.log(valore);   
}

//forEach()

function callFunc(value) {
    console.log(value);
}
callFunc("ciao") 

bestArray.array.forEach(callFunc => {
    
});

//map()

let newArraMap = bestArray.map(ele => ele + "!!!")
console.log(newArraMap);

//reduce  Manipola tutti i valori di un array di tipo numerico e ne restituisce uno soltanto

let solitoArray = [4,7,3,2,5]
let tot = solitoArray.reduce((acc, value) => acc + value, 0);
console.log(tot); 


//Arrow Function

(params) => {
    //blocco di istruzioni
}

() => {
    //blocco di istruzioni
}

param => {
    //blocco di istruzioni
}

(param1,param2, ...params) => {
    //blocco di istruzioni
}



