import { Button } from "react-bootstrap"
 
const ItemListContainer = (props) => {
    const {greeting} = props
    const {thanks} = props
    return (
        <div>
            <h1 className="text-center">{greeting}</h1>
            <h2 className="text-center">{thanks}</h2>
            {/* <Button variant="secondary">Secondary</Button>{' '} */}
        </div>
    )
}

export default ItemListContainer