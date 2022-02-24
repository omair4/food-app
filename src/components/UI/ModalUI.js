// import { Button } from "bootstrap";
import { Modal, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import BasicForm from "../Form/BasicForm"
// import { useState} from "react";
const ModalUI = (props) => {
    console.log(typeof props.cartItems);
    let sum = 0;
    if (typeof props.cartItems !== 'string') { sum = props.cartItems.map((p) => p.quantity * p.price).reduce((a, b) => a + b) };
    sum=Math.round(sum * 100) / 100;
  // const buttonR=<Button className="pull-right">Order</Button>
  return (
    <>
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <Modal
        size="lg"
        show={props.show}
        onHide={props.hideHandler}
        // backdrop= "static"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup style={{ fontSize: "30px" }}>
            {typeof props.cartItems !== "string" &&
              props.cartItems.map((items) => (
                <ListGroupItem
                  key={items.id}
                  as="li"
                  style={{ margin: "2px 10px" }}
                >
                  {items.name}
                  <span style={{ float: "right" }}>
                    <Badge
                      style={{ margin: "2px 10px" }}
                      variant="primary"
                      pill
                      bg="success"
                    >
                      ${items.price}{" "}
                    </Badge>
                    <Badge
                      bg="success"
                      style={{ margin: "2px 0px" }}
                      variant="primary"
                      pill
                    >
                      {items.quantity}
                    </Badge>{" "}
                    =
                    <Badge
                      style={{ margin: "2px 10px" }}
                      bg="secondary"
                      variant="primary"
                      pill
                    >
                      ${items.price * items.quantity}
                    </Badge>
                  </span>
                </ListGroupItem>
              ))}
            <ListGroupItem
              as="li"
              style={{ margin: "2px 10px", fontWeight: "bold" }}
            >
              Total
              <span style={{ float: "right" }}>
                <Badge
                  style={{ margin: "2px 10px" }}
                  bg="danger"
                  variant="primary"
                  pill
                  className="align-items-end"
                >
                  ${sum}
                </Badge>
              </span>
            </ListGroupItem>
            {/* {sum > 0 && <button style={{ width:"150px",marginLeft: "600px",marginTop:"20px",marginBottom:"20px",minHeight:"30px" }}>Order</button>} */}
          </ListGroup>
          <br></br>
          <BasicForm sum={sum} cartItems={props.cartItems}></BasicForm>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalUI;
