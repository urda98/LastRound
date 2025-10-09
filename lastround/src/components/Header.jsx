import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header() 
{
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('auth') === 'true';

  const logOut = () => 
    {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <Navbar  bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://via.placeholder.com/40" 
            alt="Logo"
            className="d-inline-block align-top me-2"
          />
          <span>Last Round</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Juegos</Nav.Link>
            <Link to="/cart" className="text-white ms-2" aria-label="Carrito de compras">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </Nav>  
          
          <div  className="d-flex align-items-center">
          <Nav>
            {/* Enlaces que solo se muestran si el usuario está autenticado */}
            {isAuth && (
              <>
                <Nav.Link as={Link} to="/profile/usuario123">Perfil</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
              </>
            )}
            {/* Mostrar botón de login o logout según autenticación */}
            {!isAuth ? (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={logOut}>Cerrar sesión</Button>
            )}
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
