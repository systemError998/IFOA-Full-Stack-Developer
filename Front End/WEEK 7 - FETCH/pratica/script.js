
let buttonRegister = document.querySelector(".buttonRegister")
// console.log(buttonRegister);

class User {
    constructor ( name , surname , age , email , password ){
        this.name = name
        this.surname = surname
        this.age = age
        this.email = email
        this.password = password
    }
}


buttonRegister.addEventListener('click', (e) => {
   e.preventDefault();
   const name = document.querySelector("#name")
   const surname = document.querySelector("#surname")
   const eta = document.querySelector("#eta")
   const email = document.querySelector("#email")
   const password = document.querySelector("#password")

   let userLogin = new User(name.value , surname.value , eta.value , email.value , password.value)
   console.log(userLogin);

   register(userLogin)
}) 

function register(user) {
    let url = 'http://localhost:3000/users/'
    fetch(url, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(user) 
    }).then(response => {
        if(response.ok) {
            console.log("Registrazione effettuata correttamente");
            
        }
    })
    .then(json => location.href = "registrazioneEffettuata.html")
}

function messaggio() {
    let mex = document.querySelector(".mex")
    mex.innerText = "Registrazione effettuata correttamente"
}

