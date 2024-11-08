import CartWidgetComponent from "./CartWidgetComponent"

const NavbarComponent = () => {
    return (
        <nav className="navContainer">
            <a className="aLink">JP Tattoo Supply</a>
            <a className="aLink">Insumos</a>
            <a className="aLink">Equipos</a>
            <a className="aLink">Mobiliario</a>
            <a className="aLink">Ofertas</a>
            <CartWidgetComponent counter = {15}/>
        </nav>
    )
}

export default NavbarComponent