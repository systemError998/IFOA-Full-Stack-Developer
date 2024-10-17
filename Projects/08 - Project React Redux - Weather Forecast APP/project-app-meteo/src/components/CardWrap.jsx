import { Card } from 'react-bootstrap'
import './Components.css'

export let urlIcon = 'https://openweathermap.org/img/wn/'
export let png = "@2x.png"

function CardWrap( { data }) {
  
    return (
        <Card style={{ width: '50rem' }} >
            <Card.Body className='myCard'>

                <div className='myCardResult bg-info'>
                    <div className='d-flex align-content-center'>
                        <Card.Title className=''>{data.main ? data.main.temp : ''  && "°"} </Card.Title>
                        <Card.Subtitle className="text-muted">{data.name}</Card.Subtitle>
                    </div>
                    <div>
                        <Card.Title className=''>{data.main ? data.main.humidity : ''  } </Card.Title>
                        <Card.Subtitle className="">{data.wind ? data.wind.speed : '' }</Card.Subtitle>
                    </div>
                    <div>
                        {data.weather && <img className='text-dark fs-5' style={{width: '100px', height: '100px'}} src={urlIcon+data.weather[0].icon+png} alt="" />}
                        <Card.Subtitle className="mb-2 text-muted">{data.weather ? data.weather[0].description : ''}</Card.Subtitle>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    );
}

export default CardWrap;