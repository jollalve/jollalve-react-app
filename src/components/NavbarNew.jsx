import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import CartWidgetComponent from './CartWidgetComponent';

const NavbarNew = () => {
    return (
        <Navbar data-bs-theme='light' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JP TATTOO-SUPPLY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">PRINCIPAL</Nav.Link>
            <NavDropdown title="INSUMOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CARTUCHOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">AGUJAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TINTAS</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">HIGIENE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">OTROS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EQUIPOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MAQUINAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FUENTES DE PODER</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ACCESORIOS</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <NavDropdown title="MOBILIARIO" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CAMILLAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">APOYA BRAZOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ILUMINACION</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">MESAS DE TRABAJO</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">OFERTAS</Nav.Link>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarNew