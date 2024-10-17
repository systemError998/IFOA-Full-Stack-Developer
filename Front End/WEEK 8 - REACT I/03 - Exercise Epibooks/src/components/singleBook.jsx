
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { token , urlApi } from '../dati/dati'
// import Comments from './comments'

export default function SingleBook({book}) {

    let [selectedBook , setSelectedBook] = useState(false)
    let [comments , setComments] = useState([])

    let redBorder = '' 

    let handleCard = (e) => {
        e.preventDefault()
        console.log(e.target);
        setSelectedBook(!selectedBook) //selectedBook restituirà il valore booleano opposto a quello attuale di selectedBook
        console.log(selectedBook);
    }

    let handleComments = (e) => {
        e.preventDefault()
        
    }

         //CHIAMATA PER COMMENTI
    useEffect(() => {
        fetch(`${urlApi}/${book.asin}/comments`, {

            headers: {
                "Authorization": token,
                "content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json)) //setComments({comments : json})
        .catch(error => console.log(error))
    } , [book] )  


    // console.log("singlebook", this.props) //Single book, che è una classe li prende con this.props !!IMPORTANTE
    return (
        <>
            <Card 
                style={{ width: '18rem', height: '31rem' /* , border: selectedBook === true ? '1px solid red' : '1px solid black' */} } 
                className={"mx-auto my-1 "+ (redBorder = selectedBook === true ? ' selection ' : '') }   
                key = {book.asin} 
                onClick={handleCard}> {/* //Al click restituiscimi il valore opposto a selectedBook */}
                    <Card.Img variant="top" src={book.img} style={{height: '300px'}} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush bt-0" >

                        <ListGroup.Item>{book.price}</ListGroup.Item>
                        <ListGroup.Item>{book.category}</ListGroup.Item>
                        {comments.map( (comment, index) => (
                            <div key={index}>
                                <Comments book={book}></SingleBook>
                            </div>
                        ))}
                        <Comments book={book}> </Comments>
                    </ListGroup> 
            </Card>
        </> 
    )

}

    //CHIAMATA PER COMMENTI
    /* useEffect(() => {
        fetch(`${urlApi}/${book.asin}/comments`, {

            headers: {
                "Authorization": token,
                "content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => this.setState({comments : json}))
        .catch(error => console.log(error))
    }) */
