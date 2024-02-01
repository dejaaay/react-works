import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function Header() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary text-danger py-3">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <img
              src="assets/Mcdo.png"
              width="50"
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="px-5 fw-bolder text-danger" href="#home">Home </Nav.Link>
            <NavDropdown className="px-5 fw-bolder text-danger"  title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item className='text-danger' href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className='text-danger' href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className="text-danger" href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-danger' href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="px-5 fw-bolder text-danger"  href="#link">Family Activities</Nav.Link>
            <Nav.Link  className="px-5 fw-bolder text-danger" href="#link">McDelivery</Nav.Link>
            <Nav.Link className="px-5 fw-bolder text-danger text-danger"  href="#link">Careers</Nav.Link>
            <Nav.Link className="px-5 fw-bolder text-danger"  href="#link">Opportunities</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }

  export default Header;