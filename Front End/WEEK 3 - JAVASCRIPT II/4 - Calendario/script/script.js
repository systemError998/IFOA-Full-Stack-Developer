let nowDate = new Date();
let lastDayDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);
let lastDayOfTheMonth = lastDayDate.getDate();
let calendar = document.querySelector(".calendar")
let appuntamenti = []
makeCalendar()
creaArrayAppuntamenti() 

function makeCalendar () {
    for (let i=1; i<=lastDayOfTheMonth; i++) {   //Creo il ciclo per creare tutti i giorni del mese
        const dayCellNode = document.createElement("div")   //
        dayCellNode.className = "day"; //Classe del DIV contenitore del calendario
        //funzione click che crea appuntamento 
        const day = document.createElement("h3")
        day.innerText = i;
        const month = document.querySelector(".month")
        month.innerText = nomeMese(nowDate.getMonth() + 1)
        let today = nowDate.getDate()
        if (today === 1 ) {   //Colore del giorno corrente, NON FUNZIONA
            day.className = "todayColor"
        }
        dayCellNode.appendChild(day)
        calendar.appendChild(dayCellNode)
    }
}



function nomeMese (m) {
    switch (m) {
        case 1: return "Gennaio"
        case 2: return "Febbraio"
        case 3: return "Marzo"
        case 4: return "Aprile"
        case 5: return "Maggio"
        case 6: return "Giugno "
        case 7: return "Luglio"
        case 8: return "Agosto"
        case 9: return "Settembre"
        case 10: return "Ottobre"
        case 11: return "Novembre"
        case 12: return "Dicembre"
    }
}

function creaArrayAppuntamenti () {
    for (let i=0; i<appuntamenti; i++) {
        let appuntamento = document.createElement()
    }
}