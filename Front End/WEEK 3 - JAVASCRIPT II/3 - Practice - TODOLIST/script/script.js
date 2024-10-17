//Funzione che aggiunge elementi ad una lista 
let addTodo = function(bottone) {
    bottone.preventDefault()
    let ul = document.querySelector("#toDoList") //Seleziono la lista dove lavorare
    let input = document.querySelector("input") //Seleziono input

    if (input.value.trim().length != "") {              //se il testo è vuoto 
        let listItem = document.createElement("li")     //creo elemento lista
        listItem.innerText = input.value                //come testo nella lista metto quello dell'input
        ul.appendChild(listItem)                        //appendo il listitem alla lista

        let taskEsistenti = toDoList.querySelectorAll("li")
        for (let i=0; i<taskEsistenti.length-1; i++) {
            if (input.value === taskEsistenti[i].innerText) {
                alert("task già inserita")
                listItem.remove()
            } else {  }
        }
        let cestina = document.createElement("button")  //creo bottone 
        listItem.appendChild(cestina)                   //lo appendo affianco al list item
        cestina.innerHTML = `<i class="fa-solid fa-trash"></i>` //Nome funzione del bottone
        cestina.addEventListener("click", () => {       //al click di cestina
            if (confirm("Vuoi rimuovere la task?")) {
                listItem.remove() 
            }  else { confirm.close() }        
        })

        listItem.addEventListener("click", () =>{       
            if (listItem.style.textDecoration === "line-through") {
                listItem.style.textDecoration = "none"
            } else {
                listItem.style.textDecoration = "line-through"
                listItem.style.color = "#71733D"
            }
        })
    } else { alert("Inserisci un testo por favor") }
    input.value= ""
}

let button = document.querySelector("form button")
button.addEventListener("click", addTodo)







