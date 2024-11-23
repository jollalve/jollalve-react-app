import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import CartWidgetComponent from './CartWidgetComponent';
import { NavLink } from 'react-router-dom';

const NavbarNew = () => {
    return (
        <Navbar data-bs-theme='light' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to='/' as={NavLink}>JP TATTOO-SUPPLY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/' as={NavLink}>PRINCIPAL</Nav.Link>
            <NavDropdown title="INSUMOS" id="basic-nav-dropdown">
              <NavDropdown.Item to='/products/cartuchos' as={NavLink}>CARTUCHOS</NavDropdown.Item>
              <NavDropdown.Item to='/products/agujas' as={NavLink}>AGUJAS</NavDropdown.Item>
              <NavDropdown.Item to='/products/tintas' as={NavLink}>TINTAS</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item to='/products/higiene' as={NavLink}>HIGIENE</NavDropdown.Item>
              <NavDropdown.Item to='/products/otros' as={NavLink}>OTROS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EQUIPOS" id="basic-nav-dropdown">
              <NavDropdown.Item to='/products/maquinas' as={NavLink}>MAQUINAS</NavDropdown.Item>
              <NavDropdown.Item to='/products/fuentes de poder' as={NavLink}>FUENTES DE PODER</NavDropdown.Item>
              <NavDropdown.Item to='/products/accesorios' as={NavLink}>ACCESORIOS</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <NavDropdown title="MOBILIARIO" id="basic-nav-dropdown">
              <NavDropdown.Item to='/products/camillas' as={NavLink}>CAMILLAS</NavDropdown.Item>
              <NavDropdown.Item to='/products/apoya brazos' as={NavLink}>APOYA BRAZOS</NavDropdown.Item>
              <NavDropdown.Item to='/products/iluminacion' as={NavLink}>ILUMINACION</NavDropdown.Item>
              <NavDropdown.Item to='/products/mesas de trabajo' as={NavLink}>MESAS DE TRABAJO</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to='/products/ofertas' as={NavLink}>OFERTAS</Nav.Link>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarNew