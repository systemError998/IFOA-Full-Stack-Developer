import { useState, useEffect } from 'react'
// In primis importo da react 
function ChiamataFetch() {
    // titles è una variabile, setTitle un metodo che sovrascrive la variabile titles 
    // = Come vogliamo inizializzare la variabile
    const [titles, setTitle] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                setTitle(json)
        })
    })
    
    return (
        <div>
            {titles.map(titolo => (
                <h3> {titolo.title} </h3>
            ))}
        </div>
    )
}

export default ChiamataFetch