import {Navbar,Nav,Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";

const Bar = () => {

    return (
      <div className="navcolor">
      <nav >
<Navbar className="nav1" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to={"./"}><h1 className="SiteTitle">Hatchet Tech</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to={"./resume"}>Resume</Nav.Link>
    
    </Nav>
    
    <Nav>
    <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
    
    <NavDropdown.Item as={Link} to={"./websites"}>websites</NavDropdown.Item>
    <NavDropdown.Item href='https://github.com/lucidbrawler' target="_blank" rel="noopener noreferrer">Git Hub</NavDropdown.Item>
   
 
    
  </NavDropdown>
    <Nav.Link as={Link} to={"./contact"}>
        CONTACT ME
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/explore/locations/663473593807965/scratch-farmhouse-catering/"><i class="bi bi-instagram"></i></Nav.Link>
      <Nav.Link href="https://www.facebook.com/scratchfarmhousecatering/">
        <i class="bi bi-facebook"></i>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</nav>
      <Outlet />
      </div>
    );
}

export default Bar;