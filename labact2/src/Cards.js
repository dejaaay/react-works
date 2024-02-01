import './App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
     <CardGroup>
      <Card className="mx-3 mt-5">
         <Card.Img variant="top" src="assets/Map.jpeg" />
         <Card.Body>
           <Card.Title className='text-danger fs-6 fw-bold'>1992</Card.Title>
           <Card.Text>
             This is a wider card with supporting text below as a natural lead-in
             to additional content. This content is a little bit longer.
          </Card.Text>
         </Card.Body>
       </Card>
       <Card className="mx-3 mt-5">
         <Card.Img variant="top" src="assets/Store.jpeg" />
         <Card.Body>
         <Card.Title className='text-danger fs-6 fw-bold'>1996</Card.Title>
          <Card.Text>
             This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
         </Card.Body>
      </Card>
      <Card className="mx-3 mt-5">
        <Card.Img variant="top" src="assets/Tao.jpeg" />
      <Card.Body>
      <Card.Title className='text-danger fs-6 fw-bold'>2005</Card.Title>
  <Card.Text>
           This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
         </Card.Text>
        </Card.Body>

      </Card>
      <Card className="mx-3 mt-5">
     <Card.Img variant="top" src="assets/Big.jpeg" />
        <Card.Body>
        <Card.Title className='text-danger fs-6 fw-bold'>2019</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
          first to show that equal height action.
          </Card.Text>
        </Card.Body>
       </Card>
 </CardGroup>

  );
}

export default Cards;