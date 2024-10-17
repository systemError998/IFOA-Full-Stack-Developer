
function makeTabellone() {
    let divTabellone = document.querySelector("#tabellone")
    for (let i = 1; i < 77; i++) {
        let cellaTabellone = document.createElement("div")
        cellaTabellone.innerText = [i]
        divTabellone.appendChild(cellaTabellone)
        cellaTabellone.className = "cellaTabellone"
    }
}
makeTabellone()


function estraiNumero() {
    let button = document.querySelector("#button")
    let numeriEstratti = []
    button.addEventListener("click", () =>{
        let numeroEstratto;
        do {
            numeroEstratto = (Math.ceil(Math.random()*76))
        } while (numeriEstratti.includes(numeroEstratto))    
        numeriEstratti.push(numeroEstratto)
        let numeriSelezionati = document.querySelectorAll("#tabellone div")
        numeriSelezionati.forEach(cella => {
        numeriSelezionati[numeroEstratto - 1].style.backgroundColor = "#D9B596";
        } )
    } )    
}
estraiNumero()


function makeTabellina() {
    let divTabellina = document.querySelector("#tabellina")
    for (let i = 1; i < 25; i++) {
        let cellaTabellina = document.createElement("div")
        cellaTabellina.innerText = (Math.ceil(Math.random()*76))
        divTabellina.appendChild(cellaTabellina)
        cellaTabellina.className = "cellaTabellina"
    }
}
makeTabellina()



/* function generaTabellina() {
    let buttonTabellina = document.querySelector("#tabellina button")
    button.addEventListener("click", () => {
        makeTabellina()
    }
} */






