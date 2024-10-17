import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IArticle from '../interfaces/IArticle';
import { useNavigate } from 'react-router-dom';


interface IArticleProps {
  articolo: IArticle
}

function ArticlesCard({articolo}: IArticleProps) {

  const navigate = useNavigate();

  // console.log(articolo);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={articolo.image_url} />
      <Card.Body>
        <Card.Title>{articolo.title}</Card.Title>
        <Card.Text classaName="text-truncate"> {articolo.summary}</Card.Text>
        <Card.Text>{articolo.published_at}</Card.Text>
        <Button 
          onClick={() => navigate(`/detail/${articolo.id}`)}  
          variant="primary">Details
        </Button>
        <Button
          onClick={() => window.open(articolo.url)}>
            Link
        </Button>

      </Card.Body>
    </Card>
  );
}

export default ArticlesCard;
