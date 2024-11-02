const ItemListContainer = (props) => {
    const {greeting} = props
    const {thanks} = props
    return (
        <div>
            <h1>{greeting}</h1>
            <h2>{thanks}</h2>
        </div>
    )
}

export default ItemListContainer