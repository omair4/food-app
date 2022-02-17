import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../UI/Card";
import './Summary.css'
const Summary = () => {
    return (
      <Container className="container1">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className="card1">
              
                <h2>Delicious Food, Delivered To You</h2>
                <p>
                  Choose your favorite meal from our broad selection of
                  available meals and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                  All our meals are cooked with high-quality ingredients,
                  just-in-time and of course by experienced chefs!
                </p>
              
            </div>
          </Col>
        </Row>
      </Container>
    );
}
export default Summary;