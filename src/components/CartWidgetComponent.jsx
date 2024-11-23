import { BsCart } from "react-icons/bs";
import { Badge } from "react-bootstrap";


const CartWidgetComponent = () => {
    return (
        <div>
            <BsCart fontSize={'1.6rem'}/>
            <Badge bg="danger">4</Badge>
        </div>
    )
}

export default CartWidgetComponent