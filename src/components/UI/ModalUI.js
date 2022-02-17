import { Modal, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
// import { useState} from "react";
const ModalUI = (props) => {
    console.log(typeof props.cartItems);
    let sum = 0;
    if (typeof props.cartItems !== 'string') { sum = props.cartItems.map((p) => p.quantity * p.price).reduce((a, b) => a + b) };
    sum=Math.round(sum * 100) / 100;

  return (
    <>
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <Modal
        size="lg"
        show={props.onShow}
        onHide={props.hideHandler}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup style={{ fontSize: "30px" }}>
            {typeof props.cartItems !== "string" &&
              props.cartItems.map((users) => (
                <ListGroupItem
                  key={users.id}
                  as="li"
                  style={{ margin: "2px 10px" }}
                >
                  {users.name}
                  <span style={{ float: "right" }}>
                    <Badge
                      style={{ margin: "2px 10px" }}
                      variant="primary"
                      pill
                      bg="success"
                    >
                      ${users.price}{" "}
                    </Badge>
                    <Badge
                      bg="success"
                      style={{ margin: "2px 0px" }}
                      variant="primary"
                      pill
                    >
                      {users.quantity}
                    </Badge>{" "}
                    =
                    <Badge
                      style={{ margin: "2px 10px" }}
                      bg="secondary"
                      variant="primary"
                      pill
                    >
                      ${users.price * users.quantity}
                    </Badge>
                  </span>
                </ListGroupItem>
              ))}
            <ListGroupItem as="li" style={{ margin: "2px 10px" }}>
              Total
              <span style={{ float: "right" }}>
                <Badge
                  style={{ margin: "2px 10px" }}
                  bg="danger"
                  variant="primary"
                  pill
                >
                  ${sum}
                </Badge>
              </span>
            </ListGroupItem>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalUI;
