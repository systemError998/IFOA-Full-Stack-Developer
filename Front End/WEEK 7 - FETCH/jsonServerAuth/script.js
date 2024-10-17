let url = `http://localhost:3000/`

let btnRegister = document.querySelector(".btnRegister")            //Seleziono pulsante di registrazione
let btnLogin = document.querySelector(".btnLogin")                  //Seleziono pulsante di login
let btnProduct = document.querySelector(".btnProduct")
//console.log(btnProduct);
//console.log(typeof window.location.href)
// if (document.referrer.includes("login.html")) {

if(window.location.href.includes("homepage")) {
    printProductUser()
} else if (window.location.href.includes("admin")){
    printProduct()
}

if(btnRegister){                                                    //Se esiste il pulsante di regisrazione
    btnRegister.addEventListener('click', (e) => {
        e.preventDefault()
        registerEvent()
    })                                                            //Al click, eseguo questa funzione
} else if(btnLogin){                                                //Se esiste il pulsante di login
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault()
        loginEvent()
    })                                                             //Eseguo questa funzione
} else if(btnProduct) {
    btnProduct.addEventListener('click', (e) => {
        e.preventDefault()
        createProduct()
        if(window.location.href.includes("homepage")) {
            printProductUser() }
        else if (window.location.href.includes("admin.html")) {
            printProduct()}
    })
}

class User {    //Posso creare un oggetto, oppure una classe con costruttore, 
    constructor ( name , surname , age , email , password ){
        this.name = name,
        this.surname = surname,
        this.age = age,
        this.email = email,
        this.password = password
    }
}

class Product {
    constructor(name, description, price, image) {
        this.name = name
        this.description = description
        this.price = price
        this.image = image 
    }
}

function registerEvent() {
    let name = document.querySelector('#nameRecord').value.trim()
    let surname = document.querySelector('#surnameRecord').value.trim()
    let age = document.querySelector('#ageRecord').value.trim()
    let email = document.querySelector('#emailRecord').value.trim()
    let password = document.querySelector('#pswRecord').value.trim()

    // console.log(name,surname,age,email,password);

    let newUser = new User(name, surname, age, email, password)  //Creo con new un oggetto User (creato con la classe sopra) e gli passo come valori i value di input
    let alertRegistration = document.querySelector('.alertRegistration')

    fetch(url + 'users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if(response.ok) {
            alertRegistration.innerHTML = 
            `   <div class="alert alert-success w-50 mx-auto" role="alert">
                    Registrazione effettuata con successo!
                </div> `
        }
    })
    .then(json => console.log(json)) //{ location.href = `homepage.html`}
    .catch("error", error)
}

function loginEvent() {
    let email = document.querySelector("#emailLogin").value.trim()
    let password = document.querySelector("#passwordLogin").value.trim()
    console.log(email , password)

    let loginError = document.querySelector(".loginError")

    fetch(url + 'login' , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(jsonLogin => {
        console.log(jsonLogin);
        if(jsonLogin.accessToken){
            location.href = `homepage.html`
            // localStorage.setItem('accessToken', jsonLogin.accessToken)
            btnLogin.classList.add('d-none')
            btnRegister.innerText = 'Logout'
            btnRegister.classList.add('bg-info')
        } else if (jsonLogin === 'Cannot find user') {
            loginError.innerHTML = 
            `<div class="alert alert-danger w-50 mx-auto mt-3" role="alert">
                Cannot find user!
            </div>`
        } else if (jsonLogin === 'Incorrect password') {
            loginError.innerHTML = 
            `<div class="alert alert-danger w-50 mx-auto mt-3" role="alert">
                Incorrect password
            </div>`
        }
    })
}

function createProduct() {
    let productName = document.querySelector("#productName").value.trim()
    let description = document.querySelector("#descriptionProduct").value.trim()
    let price = document.querySelector("#priceProduct").value.trim()
    let image = document.querySelector("#urlProduct").value.trim()

    let newProduct = new Product(productName, description, price, image)

    fetch(url + 'products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newProduct)
    })
    .then(response => console.log(response))
}

function printProduct() {
    let productSpace = document.querySelector(".productSpace")
    fetch(url + 'products/', {
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        json.forEach(prod => {
            productSpace.innerHTML += 
            `
            <div class="card" style="width: 18rem;">
                <img src="${prod.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text description">${prod.description}</p>
                    <p class="card-text price">${prod.price}</p>
                    <button class="btn text-black bg-body-tertiary fw-bold btnDelete" onclick="deleteProduct(event, ${prod.id})">Delete</button>
                    <button type="button" class="btn btn-primary text-black" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="update(event, ${prod.id})">
                        Update
                    </button>
                </div>
            </div>
            `       

        })
    })
}
printProduct()
function printProductUser() {
    let productSpace = document.querySelector(".productSpaceUser")
    fetch(url + 'products/', {
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        json.forEach(prod => {
            productSpace.innerHTML += 
            `
            <div class="card" style="width: 18rem;">
                <img src="${prod.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text">${prod.description}</p>
                    <p class="card-text">${prod.price}</p>
                    <button class="btn text-black bg-body-tertiary fw-bold btnShop" onclick="updateProduct(${prod.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Compra</button> 
                </div>
            </div>
            `            
        })
    })
}

function deleteProduct(evt, id) {
    evt.target.closest('.card').remove()
    fetch(url + 'products/' + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => console.log(response))
} 

function update(e, id) {
    let mioPadre = e.target.closest('.card')

    let nameProd = document.querySelector(".upName")
    let upDesc = document.querySelector(".upDesc")
    let upUrl = document.querySelector(".upUrl")
    let upPrezzo = document.querySelector(".upPrezzo")

    nameProd.value = mioPadre.querySelector("h5").innerText
    upDesc.value = mioPadre.querySelector(".description").innerText
    upPrezzo.value = mioPadre.querySelector(".price").innerText
    upUrl.value = mioPadre.querySelector("img").src


    let btnSave = document.querySelector(".btnSaveChanges")
    btnSave.addEventListener("click", () => {
        let prodChanges = new Product(nameProd.value, upDesc.value, upPrezzo.value, upUrl.value)
        // console.log(prodChanges);
        prodChanges.id = id
        console.log(prodChanges)
            fetch(url + 'products/', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(prodChanges)
            })
            .then(response => console.log(response)) 
        })
}
/* document.addEventListener('DOMContentLoaded', () => {
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

    // Aggiunge un listener per l'evento hidden.bs.modal
    myModal._element.addEventListener('hidden.bs.modal', function () {
        // La tua logica da eseguire quando il modale è stato chiuso
        //document.querySelector(".btnSaveChanges").removeEventListener()
        let btnSave = document.querySelector(".btnSaveChanges")
        let clone = btnSave.cloneNode(true);
        btnSave.parentNode.replaceChild(clone, btnSave);
  });
}) */


