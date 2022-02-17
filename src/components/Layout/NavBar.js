import { Nav, Navbar, Container} from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";
import CartButton from "./CartButton";
const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Meals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <CartButton cartItems={props.cartItems}></CartButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
