import './App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
     <CardGroup>
      <Card className="mx-3 mt-5">
         <Card.Img variant="top" src="assets/Map.jpeg" rounded/>
         <Card.Body>
           <Card.Title className='text-danger fs-6 fw-bold'>1992</Card.Title>
           <Card.Text>
             This is a wider card with supporting text below as a natural lead-in
             to additional content. This content is a little bit longer.
          </Card.Text>
         </Card.Body>
       </Card>
       <Card className="mx-3 mt-5">
         <Card.Img variant="top" src="assets/Store.jpeg" rounded/>
         <Card.Body>
         <Card.Title className='text-danger fs-6 fw-bold'>1996</Card.Title>
          <Card.Text>
          Dr. George T. Yang believes in giving back to communities and launches Ronald McDonald
          House Charities (RMHC) in the Philippines.
          </Card.Text>
         </Card.Body>
      </Card>
      <Card className="mx-3 mt-5">
        <Card.Img variant="top" src="assets/Tao.jpeg" rounded/>
      <Card.Body>
      <Card.Title className='text-danger fs-6 fw-bold'>2005</Card.Title>
         <Card.Text>
         McDonald's Philippines proudly becomes 100% Filipino-owned.
         </Card.Text>
        </Card.Body>

      </Card>
      <Card className="mx-3 mt-5">
     <Card.Img variant="top" src="assets/Big.jpeg" rounded/>
        <Card.Body>
        <Card.Title className='text-danger fs-6 fw-bold'>2019</Card.Title>
          <Card.Text>
          Today, McDonald's continues to create feel-good moments for Filipino families in over 600 restaurants nationwide.
          </Card.Text>
        </Card.Body>
       </Card>
 </CardGroup>

  );
}

export default Cards;