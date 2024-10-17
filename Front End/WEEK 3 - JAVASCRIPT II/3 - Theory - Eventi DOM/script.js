//EVENTI DEL DOM
// Su console.dir possiamo trovare tutti gli eventi che il browser ci comunica, iniziano tutti per on

function funClick() {
    console.log("Click btn");
}

let btn2 = document.querySelector("#btn2")
btn2.onclick = funClick;     //Invece di scriverlo nell'html possiamo scriverlo anche su js 
console.log(btn2);      

let btn3 = document.querySelector("#btn3")
btn3.addEventListener('click', funClick)

// -------------------------------------------------------------------------------------------------------- //

// e.preventDefault
let btn = document.querySelector("form button")
btn.addEventListener("click", function() {
/*     let name = document.querySelector('form input[name="nome"]')
    console.log(name); */
    console.log("Submit");


})

let form = document.forms[0]; //Posso accedere a tutti gli elementi del form tramite gli indici
console.dir(form);
console.log(form[0]); //nome
console.log(form[1]); //email
console.log(form[2]); //password

//Eseguitas dopo 5000millisecondi
setTimeout(() => {
    alert("Sono le persone che nessuno immagina che possano fare certe cose quelle che fanno cose che nessuno può immaginare!")
}, 5000);

//Viene seguito ogni tot millisecondi
let interval = setInterval(() => {
    console.log("intervallo ogni 5 secondi");
}, 5000)
//Problema del setInterval è che è infinito, a meno che 
setTimeout(() => {
    clearInterval(interval)
}, 10000)

