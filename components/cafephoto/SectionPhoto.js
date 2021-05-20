import {Navbar, Nav, NavDropdown,Image, Row, Col, Container, Form, FormControl, Button} from 'react-bootstrap';
import styles from '../../styles/header.module.scss'
import SectionHeader from './SectionHeader';



const SectionPhoto = () =>(

	<Container fluid className="shisha-container-fluid-cafe shisha-container-fluid-section1-wrapper-cafe">
          
          <div className="shisha-container-fluid-section1-cafe">  
          <SectionHeader/>
            <div className="shisha-section1-portfolio-wrapper">
                <Row className="shisha-row-cafe">
                  <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                    <div className="shisha-section1-portfolio-image-wrapper-cafe">
                      <Image className="shisha-section1-portfolio-image-cafe" src="/images/Rectangle 1.png" alt="React Logo" fluid />
                    </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                      <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <Image className="shisha-section1-portfolio-image-cafe" src="/images/Rectangle 2.png" alt="React Logo" fluid />
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                      <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <Image className="shisha-section1-portfolio-image-cafe" src="/images/Rectangle 3.png" alt="React Logo" fluid />
                      </div>
                    </Col>
                 
                    <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                      <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <Image className="" src="/images/Rectangle 4.png" alt="React Logo" fluid />
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                      <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <Image className="" src="/images/Rectangle 5.png" alt="React Logo" fluid />
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                      <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <Image className="" src="/images/Rectangle 6.png" alt="React Logo" fluid />
                      </div>
                    </Col>
                 
                    <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                      <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <Image className="" src="/images/Rectangle 7.png" alt="React Logo" fluid />
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                      <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <Image className="" src="/images/Rectangle 8.png" alt="React Logo" fluid />
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="shisha-col-cafe">
                      <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <Image className="" src="/images/Rectangle 9.png" alt="React Logo" fluid/>
                      </div>
                      </Col>
                    </Row>
                </div>

            

           </div>
        </Container>

);
export default SectionPhoto;