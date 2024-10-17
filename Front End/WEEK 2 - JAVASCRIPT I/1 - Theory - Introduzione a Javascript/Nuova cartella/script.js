console.log("Espressione") //stampa in console il contenuto delle parentesi

let nome = prompt("Inserisci il tuo nome", "Anna"); // apre un popup di input con inserito già il nome Anna all'interno
let cognome = prompt("Inserisci il tuo cognome;")
console.log ("Ciao " + nome + " " + cognome); // stampa nella console il valore inserito nel prompt

let eta = Number(prompt("Inserisci la tua età")); // l'età deve essere un numero, quindi metto number o parse 
let accesso = (eta >= 18) ? 'Accesso consentito' : 'Accesso negato';
console.log(accesso);

console.log(Number(eta) + 2);
console.log(parseInt(eta) + 2);
console.log(parseFloat(eta) + 2);
console.log(+eta + 2);

document.write("Ciao " + nome + " " + cognome);   // stampa a video
document.write(accesso);


