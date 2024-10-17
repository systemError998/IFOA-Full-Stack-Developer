/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* function area (l1, l2) {
    let rettArea = (l1 = prompt("Inserisci la base")) * (l2 = prompt("Inserisci l'altezza"));
    console.log(rettArea);
}
area () */



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve 
 invece tornare la loro somma moltiplicata per tre.
*/

/* function crazySum (n1 , n2) {
    let sum = parseInt(n1 = prompt("Inserisci un numero")) + parseInt(n2 = prompt("Inserisci un altro numero"))
    if (n1 = n2) {
        return (sum*3);
    } else  return sum 
} 
console.log(crazySum()); */



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* function crazyDiff (x) {
    let diff = (x = prompt("Inserisci un numero")) - 19
    if (x>19) {
        return diff*3
    } else return diff
} 
console.log(crazyDiff()); */



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) 
 oppure se n è uguale a 400.
*/

/* function boundary () {
    let y = parseInt(prompt("Inserisci un numero"))
    if ( (y>20 && y<100) || y == 400 ) {
        return true
    } else return false
}
console.log(boundary()); */



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve ritornare la stringa originale senza alterarla.
*/

/* function epify () {
    let string = prompt("Inserisci una stringa");
    if (string.startsWith("epicode")) {
        return string
    } else return "Epicode " + string
}

console.log(epify()); */



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* function check3and7 () {
    let p = prompt("Inserisci un numero per scoprire se è un multiplo di 7 o 3")
    if (p % 7 === 0 || p % 3 === 0) {
        return true
    } else return false 
}
console.log(check3and7()); */



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* function reverseString (str) {
    str = prompt("Inserisci una stringa che te la reverso")
    return str.split('').reverse().join('')

}
console.log(reverseString()); */



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


/* function upperFirst (str) {
    str = prompt("Scrivi una frase in minuscolo")
    let words = str.split(" ")          //splitto la stringa da frase in parole
    //console.log(words);               // e mi restituisce un array di n parole
    for (let i=0; i<words.length; i++) {
        let word = words[i];            //leggo ogni parola con il cilo
        //console.log(word);            //restituisce le parole 1 per 1
        words[i] = word.charAt(0).toUpperCase() + word.slice(1) 
    }                                   //uppercase alla lettera dell'indice zero di word + unisco la vecchia parola dall'indice 1
    return words.toString() //.join     // le riunisco per ricomporre la frase
}     
console.log(upperFirst()); */


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa 
 senza il primo e l'ultimo carattere della stringa originale.
*/

/* function cutString () {
    string = prompt("inserisci una stringa ed elimino prima e ultima lettera")
    let newString = string.slice(1, -1)
    return newString
}
console.log(cutString()); */



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n 
 numeri casuali inclusi tra 0 e 10.
*/

/* function giveMeRandom (n) {       //n è il numero di elementi casuali da generare nell'array
    n = prompt("Inserisci un numero che creo un array randomico")
    let randArrayBox = [];         //Creo un array vuoto che immagazzinerà i numeri generati
    for (i=0; i<n; i++) {                                     // ciclo che si ripete n volte
        let randNum = Math.floor(Math.random() * 11);   //crea un numero random tra 0 e 1 con math random, lo moltiplica per 11 e lo arrotonda 
        randArrayBox.push(randNum)             //pusho i numeri generati nel ciclo nell'array 
    }                                                // quando i diventa n il ciclo si ferma 
    return randArrayBox          // ritorno l'array generato con i numeri pushati all'interno
} 
console.log(giveMeRandom());                                 //richiamo sta sfaccimm e funzion  */


// SOLUZIONE UMBERTO

function giveMeRandom (n) {
    for(let i=0; i<n; i++)
    let numRand = Math.random(); // crea numero casuale
    arrNum.push(numRand)
    return arrNuM;
}
console.log(giveMeRandom(2));
