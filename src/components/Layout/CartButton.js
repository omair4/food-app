import { Button, Badge } from "react-bootstrap";
import { useState } from "react";
import ModalUI from "../UI/ModalUI";
const CartButton = (props) => {
    const [lgShow, setLgShow] = useState(false);
    const onClickHandler = () => {
        setLgShow(!lgShow);
    }
    const onHideHandler = () => {
        setLgShow(!lgShow);
    }
    return (
      <Button onClick={onClickHandler} variant="primary">
        Cart <Badge bg="secondary">0</Badge>
        <span className="visually-hidden"></span>
        <ModalUI
          cartItems={props.cartItems}
          onShow={lgShow}
          hideHandler={onHideHandler}
        ></ModalUI>
      </Button>
    );
}
export default CartButton;