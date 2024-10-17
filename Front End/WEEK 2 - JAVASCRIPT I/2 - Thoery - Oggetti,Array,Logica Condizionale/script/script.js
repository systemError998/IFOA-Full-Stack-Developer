// OBJECT

let nome = "Mario"
let cognome = "Rossi"
let eta = "45"
let citta = "Roma"

const user = {            //oggetto user, contenente var e valori - il riferimento alla zona di memoria non può essere modificato
    nome : 'Mario',
    cognome : 'Rossi',
    eta : '45',
    citta : 'Roma',
    attivo: true
}

user.cap = '00134'        //aggiunge una nuova var all oggetto
user.razza = 'Italiana'   //aggiunge una nuova var all oggetto
user.nome = 'Anna'        // cambia il nome dell'user 

delete user.razza         // cancella una variabile e il rispettivo valore

console.log(user);         // stampa nella console tutti i dati dell'utente
console.log(user.cap)      // stampa solo il CAP

const newUtente = user; // l'oggetto newUtente prenderà la zona di memoria di utente, quindi è un errore

newUtente.nome = 'Giulia'
newUtente.eta  = '25'

console.log(user);
console.log(newUtente);

const copyUser = Object.assign({}, user);  // copia i VALORI user in una nuova zona di memoria vuota {}
console.log(copyUser);   // stampa gli stessi valori di User , ma se modifichiamo user newUser rimane con dati vecchi



// ARRAY

let arr = ['Cane', 'Gatto', 'Tartaruga','Anatra'];  // In uno spazio di memoria, inserisco più di un valore 
console.log(typeof arr)   //Array è di tipeof object
console.log(arr);         // Stampa tutto l'array
console.log(arr[2])       // Tartaruga, perchè l'indice parte da 0 e arriva alla lunghezza totale -1

arr[2] = 'Coniglio';     // Modifico la terza posizione dell'array
console.log(arr);

arr[4] = 'Serpente'     // Aggiunge un nuovo indice con rispettivo valore all'array

//box blu sono proprietà, box viola sono funzioni ()

// PROPRIETA' 
console.log(arr.length)  //la proprietà lenght mi restituisce la lunghezza del nostro array 

// FUNZIONI
arr.push('Cavallo')     // la funziona push aggiunge un nuovo elemento alla fine dell'array e restituisce la nuova lunghezza
console.log(arr);

arr.unshift('Delfino');  //la funziona unshift aggiunge un nuovo elemento all'inizio dell'array
console.log(arr);   

let ult = arr.pop();              //Elimina e restituisce l'ultimo elemento di un array
console.log("L'ultimo elemento eliminato dall'array  è " + ult);

let pri = arr.shift();             //Elimina e restituisce il primo elemento di un array
console.log("Il primo elemento eliminato dall'array è " + pri);

/* /* arr.splice(1, 2)    //Partendo dall'indice 1 cancella 2 elementi
console.log(arr);

arr.splice(1,2, 'Lumaca');
console.log(arr); */

arr.sort();             //Ordina i numeri in ordine crescente, le parole in ordine alfabetico
console.log(arr);

arr.reverse();

//LOGICA CONDIZIONALE

//if

let num = prompt('Inserisci un numero');
if (num > 10) {
    console.log("Il numero è maggiore di 10");
}
    else if (num == 10 ){
        console.log("Il numero è 10!!")
}
else {
    console.log("Il numero è minore di 10");
}

// TRUE:  true | tutti i numeri tranne 0 | stringa piena | {} | []
// FALSE: numero 0 e -0 |                  stringa vuota |null|undefined
if(0) {
    console.log("falzo")
}
 

