import styles from '../styles/sidemenu.module.scss'
import { Row, Col, Form, Container, FormGroup, InputGroup, InputGroupAddon, FormControl, Button,Nav,Navbar} from 'react-bootstrap'
import Home from '../public/images/Home.svg';
import PaperPlane from '../public/images/PaperPlane.svg'
import Person from '../public/images/Person.svg'
import Star from '../public/images/Star.svg'
import CloseCircle from '../public/images/CloseCircle.svg'
const SideMenu = () => (
    <div>
        <div className="side-menu-holder">
        <Navbar bg="light" expand="xl">
                <Navbar.Toggle aria-controls="side-menu-bar-shisha" />
                <Navbar.Collapse id="side-menu-bar-shisha">
                <Nav  >
                        <ul>
                                <li>
                                        <Nav.Link className="side-menu-item" href="#" eventKey="#">
                                                <Home className="side-menu-icon" /><span className="side-menu-span">Home</span>
                                        </Nav.Link>
                                </li>
                                <li>
                                        <Nav.Link className="side-menu-item" href="#" eventKey="#">
                                                <PaperPlane className="side-menu-icon" /><span className="side-menu-span">Places</span>
                                        </Nav.Link>    
                                </li>
                                <li>
                                        <Nav.Link className="side-menu-item" href="#" eventKey="#">
                                                <Person className="side-menu-icon" /><span className="side-menu-span">Profile</span>
                                        </Nav.Link> 
                                </li>
                                <li>
                                        <Nav.Link className="side-menu-item" href="#" eventKey="#">
                                                <Star className="side-menu-icon" /><span className="side-menu-span">Favourites</span>
                                        </Nav.Link> 
                                </li>
                                <li>
                                        <Nav.Link className="side-menu-item" href="#" eventKey="#">
                                                <CloseCircle className="side-menu-icon" /><span className="side-menu-span">Log out</span>
                                        </Nav.Link> 
                                </li>
                                <li>
                                        <hr className="side-menu-hr"></hr> 
                                </li>
                                <li>
                                        <h3 className="copy-right-text">© 2020 COPYRIGHT <br></br>SHISHATRIP</h3>
                                </li>
                                <li>
                                        <h3 className="connection-text">info@shishatrip.de <br></br>+1 482 152 986 2272</h3>
                                </li>
                </ul>
                
                </Nav>
                </Navbar.Collapse>    
        </Navbar>
        </div>

    </div>
  );
  
  export default SideMenu;