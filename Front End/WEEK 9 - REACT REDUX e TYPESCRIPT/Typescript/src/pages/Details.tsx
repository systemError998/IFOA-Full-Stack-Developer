import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import IArticle from '../interfaces/IArticle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

interface IArticleProps {
  articolo: IArticle
}

function Details() {

  const navigate = useNavigate()
  const { id } = useParams()
  const [ article , setArticle ] = useState<IArticle>()
  console.log(article);

  useEffect(() => {
    axios.get('https://api.spaceflightnewsapi.net/v4/articles/' + id)
      .then(nius => setArticle(nius.data))
  }, [id])

  console.log(article);

  return (
    <>
    { article && 
        <Row>
          <Col lg={2}>
            <Card.Img variant="top" src={article.image_url} style={{width: '18rem'}} />
          </Col>
          <Col lg={10}>
            <Card.Header>{article.published_at}</Card.Header>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.summary}</Card.Text>
              <Button 
                onClick={() => navigate(-1)}
                variant="primary">Leggi altro</Button>
            </Card.Body>
          </Col>
        </Row>
    }
    </>
  );
}

export default Details;
