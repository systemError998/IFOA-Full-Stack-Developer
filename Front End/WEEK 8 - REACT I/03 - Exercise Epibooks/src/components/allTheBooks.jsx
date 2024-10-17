import { Form , Row, Button} from 'react-bootstrap';
import React, {Component} from 'react';

import fantasyBooks from '../books/fantasy.json'
import horrorBooks from '../books/horror.json'
import scifiBooks from '../books/scifi.json'
import romanceBooks from '../books/romance.json'
import historyBooks from'../books/history.json' 

// let library = [...fantasyBooks, ...horrorBooks, ...scifiBooks, ...romanceBooks, ...historyBooks];

import Booklist from './bookList'

export default class AllTheBooks extends Component {

    state = {
        searchQuery : '',
        filteredBooks: []
    }
    
    //Metodo che filtra l'array di libri in base al testo inserito nell'input
    getSearchQuery = (e) => {
        let libriFiltrati = horrorBooks.filter(libroFiltrato => { libroFiltrato.title.includes(this.state.searchQuery)})
        this.setState({filteredBooks: libriFiltrati})
        console.log(libriFiltrati);
    }

    render() {    
        // console.log('books: ' , horrorBooks);
        // console.log(e.target.value);
         return (
            <>
            <div className='row d-flex justify-content-center align-items-center'>
                <Form noValidate /* validated={validated} onSubmit={handleSubmit} */ className='mt-3 ms-3 col-9'>
                    <Row className="mb-3">
                        <Form.Group md="4" controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name" 
                      // Al change dell'input, aggiorno lo stato searchQuery con il valore dell'input target (e lo stampo in console)
                            onChange = {(e) => this.setState({searchQuery: e.target.value}, console.log(this.state.searchQuery))}
                            />
                        </Form.Group>
                    </Row>
                </Form>
                <Button type="submit" className='col-lg-2 h-25' onClick={this.getSearchQuery}> Search</Button>
            </div>
            
            {/* //Component booklist */}
            <Booklist books={horrorBooks}></Booklist> //Leggo qui i libri... Poi in booklist li passo
            </> 
        ) 
    } 
}


//Soluzione Umberto con Classe
/* export default class AllTheBooks extends components {

    //Dobbiamo inserire i libri all'interno dello stato 
    state = {
        books: {}
    }
 */
    //Dopo che il componente è stato montato , setto lo stato dei libri
/*     componentDidMount() {
        //Setto lo stato uguale ai libri importati
        this.setState({
            ...this.state.books,  //Leggo tutto ciò che c'era in books 
            horror: horrorBooks   //Creo una nuova proprietà da aggiungere in books   
            //Oppure this.state.books = tuttiIBooks (magari un array)
        })
    } */
/*     render() {
        return (
            <>

            </>
        )
    }
} */
