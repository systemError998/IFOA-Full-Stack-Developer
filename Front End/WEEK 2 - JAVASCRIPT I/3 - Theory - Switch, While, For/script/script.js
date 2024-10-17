// BLOCCO CONDIZIONALE IF/ELSE

/* if (condizione) {
    //fai questo
} else if (condizione) {
    //fai questo
} else if(condizione){
    //fai questo
} else if(condizione) {  // MAX 3 ELSE IF
    //fai questo
} else {//fai questo} */



// SWITCH 
//Switch(if) , case(else if) , default(else)

/* switch (espressione) {  //Posso mettere quanti CASE voglio
    case a: 
        // Blocco di istruzioni
        break           // Il break serve per interrompere il blocco se la condizione si verifica
    case b:
        // Blocco di istruzioni
        break           
    case c:
        // Blocco di istruzioni
        break           
    default: //E' l'ultima opzione, come l'else


} */



// Esempio ELSE IF

/* let weekDay = Number(prompt("Inserisci un numero per sapere che giorno della settimana è"))

if(weekDay === 1){
    console.log("Oggi è Lunedi")
} else if (weekDay === 2) {
    console.log("Oggi è Martedi")
} else if (weekDay === 3) {
    console.log("Oggi è Mercoledi")
} */


// STESSO ESEMPIO MA CON SWITCH

/* switch (weekDay) {
    case 1: console.log("Oggi è lunedi");
    break;
    case 2: console.log("Oggi è martedi");
    break;
    case 3: console.log("Oggi è mercoledi");
    break;
    case 4: console.log("Oggi è giovedi");
    break;
    case 5: console.log("Oggi è venerdi");
    break;
    case 6: console.log("Oggi è sabato");
    break;
    case 7: console.log("Oggi è lunedi");
    break;
    default 
        console.log("Il valore immesso non è valido");
        break;
} */


// IF ELSE - esegui l'istruzione se la condizione è vera
//WHILE - ripeti l'istruzione finchè la condizione è vera



// STRUTTURE ITERATIVE (Cicli)
//While (Ripeti un blocco di istruzione FINCHE la condizione è vera)

/* while(condizione) {
    //blocco di istruzioni
} */

/* let count = 5;  // variabile contatore

while(count > 0) {
    console.log("Ciao")
    count -= 1;
} */

/* while(true) {
    let v = prompt("Inserisci un numero oppure end per terminare");
    if (v === 'end') {  //Se il valore inserito è end
        break;          // Con break interrompo il ciclo
    } 
    if (isNaN(v)) {
    } console.log("Non è un numero")
}   else  { console.log(v) } */




// DO-WHILE          Se TRUE esegue while , se false esegue solo il do

/* let count = val;
do {
    console.log()        // stampa
    count++;         // incrementa
} while (condizione) // controlla e poi risale al do */

//ESEMPIO

/* let pass;
do {  //RIPETI QUESTO 
    pass = prompt("Inserisci la password")
} while (pass !== qwerty );  //FINCHE NON SUCCEDE QUESTO
console.log("Accesso eseguito") */


// CICLO FOR

/* for (let varContatore = valore < varContatore++  element = varContatore++);{
    //istruzioni 
} */


let array = [1,2,3,4,5]

for (let i = 0; i<array.lenght; i++) {  //itera per tutta la lunghezza dell'array
    console.log(i);
}