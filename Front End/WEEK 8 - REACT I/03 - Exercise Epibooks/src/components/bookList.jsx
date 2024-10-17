import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './singleBook'

export default function BookList({ books }) { //Qui prendo i libri come parametro con la destrutturazione 
  // console.log("sono booklist" , books);
  return (
    <Row xs={12} md={4} className="g-4">  {/* //Li itero e li passo come prop a singleBook */}
        {books.map( (book, index) => (
            <div key={index}>
                <SingleBook book={book}></SingleBook>
            </div>
        ))}
    </Row>
  )
}