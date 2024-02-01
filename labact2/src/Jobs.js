import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Jobs() {
  return (
    <Container className='pt-5 px-5 p-5'>
      <Row>
      <Col xs={8} md={4}>
          <Image src="assets/chicken.jpeg"
          width="300"
          height="305"
          rounded />
        </Col>
        <Col>
          <h2 className='text-center fw-bolder'>Our Food</h2> <br></br>
          <p>McDonald’s serves the world some of its favorite food like the Big Mac, Big n' Tasty, Quarter Pounder with Cheese, Cheeseburger, French Fries, Egg McMuffin, Apple Pie and Sundae. This is what we are famous for, globally and locally.
            <br/>
           <p>In the Philippines, we are also happy to serve local favorites like Chicken McDo, Burger McDo and McSpaghetti.  These favorites were specially made to cater to the unique Filipino palate. </p> </p>
        </Col>
      </Row>
      <Row className='pt5'>
      <Col className='pt-5' xs={8} md={4}>
          <Image src="assets/delivery.jpeg"
          width="300"
          height="305"
          rounded />
        </Col>
        <Col className='pt-5'>
          <h2 className='text-center fw-bolder'>24/7 Restaurant and Delivery Service</h2> <br></br>
          <p>It was in 2005 when McDonald’s first introduced its 24-hour restaurants and all-day McDelivery service to the industry. At any time, customers can dial 86-2-36 or log-on to mcdelivery.com.ph to get their McDonald’s favorites. And then in 2014, McDonald's expanded its McDelivery service to mobile through the McDo PH App, downloadable FREE at the App Store and Google Play Store.
          </p>
        </Col>
      </Row>
      <Row className='pt5'>
      <Col className='pt-5' xs={8} md={4}>
          <Image src="assets/crew.jpg"
          width="300"
          height="305"
          rounded />
        </Col>
        <Col className='pt-5'>
          <h2 className='text-center fw-bolder'>Quality Service and Cleanliness</h2> <br></br>
          <p> At McDonald’s, world-class standards are in place for quality, service and cleanliness.  From responsibly sourcing product ingredients, providing efficient and convenient services to maintaining cleanliness within our restaurants - these are essential in our daily operations and procedures.s
          </p>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Jobs;