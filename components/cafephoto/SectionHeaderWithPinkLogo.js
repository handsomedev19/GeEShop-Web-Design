import {Navbar, Nav, NavDropdown,Image, Row, Col, Container, Form, FormControl, Button} from 'react-bootstrap';
import styles from '../../styles/header.module.scss'


const SectionHeaderWithPinkLogo = () =>(
		<div>
		<Row className="shisha-row-cafe">
              <Col md={4} className="shisha-col-cafe">
                <div className="shisha-section1-top-left-buttons-wrapper-cafe">

                  <div className="shisha-section1-top-left-button-template">
                    <div className="">
                      <Image className="shisha-section1-button-eye-cafe" src="/images/eye 1.svg" alt="React Logo"/>
                      <span className="shisha-section1-top-left-button-template-number"> 1528</span>
                    </div>
                    <div className="">
                      <p className="shisha-section1-top-left-button-template-text">Views</p>
                    </div>   
                  </div>

                  <div className="shisha-section1-top-left-button-template">
                    <div className="">
                      <Image className="shisha-section1-button-arrow-up(1)2-cafe" src="/images/arrow-up (1) 2.svg" alt="React Logo" />
                      <span className="shisha-section1-top-left-button-template-number"> 167</span>
                    </div>
                    <div className="">
                      <p className="shisha-section1-top-left-button-template-text">Up Votes</p>
                    </div>   
                  </div>

                  <div className="shisha-section1-top-left-button-template">
                    <div className="">
                      <Image className="shisha-section1-button-trending-up1-cafe" src="/images/trending-up 1.svg" alt="React Logo" />
                      <span className="shisha-section1-top-left-button-template-number"> #10</span>
                    </div>
                    <div className="">
                      <p className="shisha-section1-top-left-button-template-text">Trends</p>
                    </div>   
                  </div>
                
                </div>
              </Col>
              <Col  md={4} className="shisha-col-cafe">
                <div className="shisha-section1-button-wrapper-cafe">
                  <Image className="shisha-section1-button-cafe shisha-section1-button-cafe-for-1440" src="/images/PinkEllipse.svg" alt="React Logo" />
                </div>
              </Col>
              <Col  md={4} sm={12} className="shisha-col-cafe">
                <div className="shisha-section1-top-left-button-group-wrapper-cafe">
                  <div></div>
                  <div className="shisha-section1-top-left-button-group-cafe ">
                    <Image className="shisha-top-right-button-cafe" src="/images/Button-cafe-photo-1.svg" alt="React Logo" />
                    <Image className="shisha-top-right-button-cafe" src="/images/Button-cafe-photo-2.svg" alt="React Logo" />
                  </div>
                </div> 
              </Col>
            </Row>

            <Row className="shisha-row-cafe">
              <Col className="shisha-col-cafe">
                  <p className="shisha-section1-brand-text1-cafe">
                      Lemoon Shisha & Cocktail <br/> Lounge Bar Nürnberg
                  </p>
                  <p className="shisha-section1-brand-text2-cafe">
                      Shisha Bar / Lounge, Nürnberg
                  </p>
                  <p className="shisha-section1-brand-text3-cafe">
                      Shisha | Cocktail | Bar in der Platenstr. 12 ecke Ulmenstr. Am Dianaplatz, vom Kaufland 100m entfernt.
                  </p>
              </Col>
            </Row>

            <Row className="shisha-row-cafe">
              <Col className="shisha-col-cafe">
                <div className="shisha-section1-nav-bar-wrapper">
                    <Nav variant="pills" className="shisha-section1-nav-bar" defaultActiveKey="#113">
                      <Nav.Item className="">
                        <Nav.Link href="#111">
                          <Image className="" src="/images/cafe-photo-info1-icon.svg" alt="React Logo" />
                          &nbsp; Stories 
                          </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="">
                        <Nav.Link eventKey="#112">
                        <Image className="" src="/images/cafe-photo-info2-icon.svg" alt="React Logo" />
                        &nbsp; Info 
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="">
                        <Nav.Link eventKey="#113">
                        <Image className="" src="/images/camera (1) 1.svg" alt="React Logo" />
                         &nbsp; Photos
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                </div>                  
              </Col>
            </Row>
		</div>
);
export default SectionHeaderWithPinkLogo;