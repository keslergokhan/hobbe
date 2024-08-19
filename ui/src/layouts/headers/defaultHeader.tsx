import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faRightFromBracket,faUser,faGear } from '@fortawesome/free-solid-svg-icons';


export const DefaultHeader:React.FC = () =>{
    return (
        <>
        
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home"><span className='hoppe-mini' >hoppe</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Anasayfa</Nav.Link>
                            <Nav.Link href="#features">Filmler</Nav.Link>
                            <Nav.Link href="#pricing">Kitaplar</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title={<>Diğer <FontAwesomeIcon icon={faBars} /></>} id="collapsible-nav-dropdown">
                            
                                <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Profil </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><FontAwesomeIcon icon={faGear}></FontAwesomeIcon> Ayarlar  </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logaut">
                                <FontAwesomeIcon icon={faRightFromBracket} /> Çıkış 
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    )
}