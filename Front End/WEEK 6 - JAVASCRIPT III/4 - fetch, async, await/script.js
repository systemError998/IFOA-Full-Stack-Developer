document.addEventListener("DOMContentLoaded" , () => {
    const apiKey = 'wsR81hQoujmJRylCjQKQx6Pc341A9WPnknjcqHzZe9899mgWIZtq6jgb'
    //Parametri modificabili dell'url
    let input = document.querySelector("form input")
    let query = input.value;
    let searchBtn = document.querySelector("form button")
    console.log(searchBtn);
    let url = `https://api.pexels.com/v1/search?query=${query}`
    
    fetch(url, {method: 'GET', 
                headers: {
                    Authorization: apiKey
                }
    })
    .then(response => response.json())
    .then(jsonResponse => {
        createCard(jsonResponse)
        // search() //Se non richiamo le funzioni nel then del fetch darà null
    })
    .catch((error) => console.log(error , "ERROR"))
})



function createCard(jsonResponse) {
    console.log(jsonResponse);
    let imgs = document.querySelectorAll(".card img")
    let btnPrimary = document.querySelector(".btn-primary")
    // let btnSecondary = document.querySelector(".btnSecondary")
    let btnHide = document.querySelectorAll(".btn-group button:last-child")
    //console.log(btnHide);
    let idPhotos = document.querySelectorAll("small.text-muted")
    //console.log(idPhotos);

    btnPrimary.addEventListener("click", () => {
        imgs.forEach((img, index) => {
            //console.log(jsonResponse.photos);
            img.setAttribute("src", jsonResponse.photos[index].src.original)
        });
    })

    btnHide.forEach(btn => {
        btn.innerText = "Hide"
        btn.addEventListener("click", (e) => {
            //console.log(e.target.parentNode.parentNode.parentNode.parentNode)
            // let target = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
            // Test funzione closest
            let target = e.target.closest(".col-md-4")
            target.classList.add("d-none")
        })
    });

    idPhotos.forEach((id,index) => {
        id.innerText = jsonResponse.photos[index].id
    });
}

