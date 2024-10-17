import { Card, Button, Form } from 'react-bootstrap'
import React from 'react'

import { useNavigate , useParams } from 'react-router-dom'

export default function SearchBar( { searchLocation , targetLocation  , searchForecast } ) {

/*   const navigate = useNavigate()
  let { location } = useParams(); 
  console.log(navigate);
  console.log(location); */

  return (
    <Card className='mySearchBar' style={{ width: '50rem' }} >
      <Form className="d-flex my-2 mx-2 ">
          <Form.Control 
              onChange={targetLocation}
              type="search"
              placeholder="Search location"
              className="me-2"
              aria-label="Search"
          />
          <Button 
            type='button'
            variant="outline-dark" 
            onClick={() => {
              // navigate(`/weather/${location}`)
              searchLocation() ; 
              searchForecast() 
            }}>
            <i className="bi bi-search"></i>
          </Button>
      </Form>
    </Card>
  )
}

