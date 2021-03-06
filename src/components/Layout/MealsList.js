import { useContext } from "react";
import  MealsContext  from '../Meals/MealsContext'
import { Container, ListGroup,Badge, Button } from 'react-bootstrap'
import Card from '../UI/Card'
const MealsList = (props) => {
    const MealsData = useContext(MealsContext);
    // console.log(MealsData)
    return (
      <Container>
        <ListGroup>
          {MealsData.map((data) => (
            <Card key={data.id}>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{data.name}</div>
                  {data.description}
                  <div>
                    <Badge bg="info" variant="primary" pill>
                      ${data.price}
                    </Badge>
                  </div>
                </div>

                
                <Button onClick={() => {
                  props.addItem(data)
                }} id={data.id} variant="warning" size="md">
                    Add
                  </Button>
                      
              </ListGroup.Item>
            </Card>
          ))}
        </ListGroup>
      </Container>
    );
}
export default MealsList;