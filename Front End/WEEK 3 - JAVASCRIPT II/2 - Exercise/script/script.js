/* ESERCIZIO 1
      Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
   */

const changeTitle = function () {
  let h1 = document.querySelector("h1")
  h1.innerText = "New Title"
  console.log(h1);
}
changeTitle()

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
  let h1 = document.querySelector("h1")
  h1.className = "myHeading"
  console.log(h1.className);
}
addClassToTitle()


/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
  let divP = document.querySelectorAll("div > p")
  divP.forEach(paragrafo => {
    paragrafo.innerText = "TESTO DEI P FIGLI DI UN DIV!!!!"
  });
  console.log(divP);
}
changePcontent();


/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link 
 (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
  let accaref = document.querySelectorAll('a:not(footer a)')
  accaref.forEach(link => {
    link.href = "https://www.google.com"
  }); console.log(accaref);
}
changeUrls()

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda 
 lista non ordinata
*/

const addToTheSecond = function () {
  let li = document.createElement("li")
  li.textContent = "4rd"
  document.querySelector("#secondList").append(li)
}
addToTheSecond()

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
  let newP = document.createElement("p").innerText = "Nuovo paragrafo del primo div"
  let firstDiv = document.querySelector("div").append(newP)
  console.log(newP);
}
addParagraph()

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
  firstList = document.querySelector("ul").style.display = "none"
  //ul.remove lo rimuove dal DOM
  console.dir(firstList);
}
hideFirstUl()

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
  greenBg = document.querySelectorAll("ul")
  greenBg.forEach(ul => {
    ul.style.backgroundColor = "#25d61b"
  });
}
paintItGreen()


/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 
 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
  let h1 = document.querySelector("h1")
  h1.innerText = h1.innerText.slice(0, -1)
}
makeItClickable()

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno 
 come contenuto di un alert()
*/

const revealFooterLink = function () {
  linkFoo = document.querySelector("footer a")
  alert(linkFoo)
}

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento nodo con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: 
 immagine, nome, prodotto, quantità, prezzo
*/

// let intTab = ["immagine", nome, "prodotto", "quantità", "prezzo"]


/* const generateTable = function () {
  let queryTabella = document.querySelector("#tableArea")
  let table = document.createElement("table")
  let tableHead = document.createElement("th")

  //INTESTAZIONI

  let tableHead1 = document.createElement("th")
  queryTabella.appendChild(tableHead1).innerText = "Immagine"
  let tableHead2 = document.createElement("th")
  queryTabella.appendChild(tableHead2).innerText = "Nome prodotto"
  let tableHead3 = document.createElement("th")
  queryTabella.appendChild(tableHead3).innerText = "Quantità"
  let tableHead4 = document.createElement("th")
  queryTabella.appendChild(tableHead4).innerText = "Prezzo" 
    
generateTable()
} */

let queryTabella = document.querySelector("#tableArea") //seleziono il nodo radice 
console.dir(queryTabella)
let table = document.createElement("table")
table.style.border = "1px solid black"
table.style.borderCollapse = "collapse"


const generateTable = function (...headers) {
  let tableRow = document.createElement("tr")
  queryTabella.appendChild(table)
  table.appendChild(tableRow)

  headers.forEach(header => {
    let tableHead = document.createElement("th")
    tableRow.appendChild(tableHead)
    tableHead.innerText = header
    tableHead.style.border = "1px solid black"
    console.dir(tableRow)
  })
}
generateTable("Immagine" , "Nome", "Prodotto", "Quantità", "Prezzo")


/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente 
 creata e fornisca i dati necessari come parametri
*/

const addRow = function (...datiTab12) {
  //let queryTabella = document.querySelector("#tableArea table")
  // let table = document.createElement("table")
  let tableRow2 = document.createElement("tr")
  table.style.border = "1px solid black"
  queryTabella.appendChild(table)
  table.appendChild(tableRow2)
  // queryTabella.appendChild(tableRow2)
  datiTab12.forEach(dato12 => {
  let tableData12 = document.createElement("td")
  tableRow2.appendChild(tableData12)
  tableData12.innerText = dato12
  tableData12.style.border = "1px solid black"
  table
  });

}
addRow("dato1", "dato2", "dato3", "dato4", "dato5") 

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {

}

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/
// (Math.floor(Math.random() * 15899577).toString(16))
const changeColorWithRandom = function () {
  let h2 = document.querySelector("#changeMyColor")
  let red = Math.round(Math.random()*255)
  let green = Math.round(Math.random()*255)
  let blue = Math.round(Math.random()*255)
  h2.style.color = `rgb(${red},${green},${blue})` 
}

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {}