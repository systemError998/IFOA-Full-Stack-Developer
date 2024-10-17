document.querySelector(".buttonLogin").addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    login(email,password)
})

function login (email,pass) {
    let credenziali = {
        "email" : email,
        "password" : pass
    }
    console.log(credenziali);

    let url = 'http://localhost:3000/login/'
        fetch(url, 
            {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credenziali)
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            if(json.status == 200) {
                location.href = "homepage.html"
            } else {
                alert(json.messaggio)
            }
        })
}