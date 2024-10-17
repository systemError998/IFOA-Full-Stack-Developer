import Card from 'react-bootstrap/Card';
import './banner.css'
function MyBanner(props) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={props.imgUrl} alt={props.imgAlt} className='bannerImg'/>
      <Card.ImgOverlay>
        <Card.Title>EpiBooks</Card.Title>
        <Card.Text>
        "Immerse Yourself in Infinite Stories at EpiBooks – Where Every Page Holds a World of Wonder. Your Journey Awaits in the Heart of Literature."
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default MyBanner;
