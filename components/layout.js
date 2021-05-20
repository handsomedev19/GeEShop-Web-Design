import styles from '../styles/layout.module.scss';
import { Row, Col, Form, Container, FormGroup, InputGroup, InputGroupAddon, FormControl, Button} from 'react-bootstrap';
import Link from 'next/link';
import HeaderWithoutNavbar from './HeaderWithoutNavbar';
import HeaderWithNavbar from './HeaderWithNavbar';
import SideMenu from './SideMenu';
import GridShow from './GridShow';
import Footer from './Footer';



export default function Layout({ children, home }) {
  return (
    <div >
        {home ? (
          <HeaderWithoutNavbar/>
          ):(<HeaderWithNavbar/>)}
          <main>{children}</main>
        <Footer/>
    </div>
  );
}



     
              
        
        
        
      
    
      
 