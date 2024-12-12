import { BsCart } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const CartWidgetComponent = () => {
    const {cartQuantity} = useCart()
    return (
        <div>
            <BsCart fontSize={'1.6rem'}/>
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidgetComponent