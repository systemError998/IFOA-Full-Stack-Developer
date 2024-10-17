// \/ Altezza Navbar in pixel
let heroHeight = 350;

// \/ Funzione change background at the scroll event
let scrollNavbar = () => {
    let nav = document.querySelector(".navbar")
    let but = document.querySelector(".startButton")
    console.dir(nav);
    window.addEventListener('scroll', () => {
        // Help: https://bobbyhadz.com/blog/change-background-color-on-scroll-using-javascript //
    /*  Se il contenuto del documento viene fatto scorrere verticalmente più dell'altezza 
        della barra di navigazione, utilizziamo il metodo classList.add per aggiungere 
        la scrolledclasse all'elemento.
        Altrimenti, utilizziamo il metodo classList.remove per rimuovere la classe dall'elemento.
        La scrolledclasse imposta semplicemente un colore di sfondo con una transizione. */
        if (
            document.body.scrollTop > heroHeight ||
            document.documentElement.scrollTop > heroHeight
        ) {
            nav.classList.add("navbar_scrolled")
            but.style.backgroundColor = '#1a8917';
        } else {
            nav.classList.remove("navbar_scrolled")
            but.style.backgroundColor = '#000';
        }
    })
}
scrollNavbar()

//
function randoM() {
    let m = document.querySelectorAll('g[opacity]');

    m.forEach(element => {
        let randomOpacity = Math.floor(Math.random());
        element.setAttribute('opacity', randomOpacity);
        element.classList.add('randoM');
    });
}

randoM();
setInterval(mRandom, 2000); 



