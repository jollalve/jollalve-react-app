const CartWidgetComponent = ({counter}) => {
    return (
        <div className="cartWidgetContainer">
            <img src="./cart.png" alt="cart" className="cartIcon"/>
            <p className="cartCounter">{counter}</p>
        </div>
    )
}

export default CartWidgetComponent