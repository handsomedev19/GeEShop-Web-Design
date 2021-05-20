import {Navbar, Nav, NavDropdown,Image, Row, Col, Container, Form, FormControl, Button} from 'react-bootstrap';

import SectionHeaderWithPinkLogo from './SectionHeaderWithPinkLogo'

const SectionInfo = () =>(

        <Container fluid className="shisha-container-fluid-cafe shisha-container-fluid-section1-wrapper-cafe">
          <div className="shisha-container-fluid-section1-cafe">          
           
            <SectionHeaderWithPinkLogo/>

            <div className="shisha-section1-info-wrapper-cafe ">
                <Row className="shisha-row-cafe">
                  <Col className="shisha-col-cafe">
                    <div className="shisha-section1-info-map-wrapper-cafe">
                      <Image className="" src="/images/Map.svg" alt="React Logo" fluid/>
                    </div>
                  </Col>
                </Row>
                <Row className="shisha-row-cafe shisha-section1-info-buttons-wrapper1-cafe">
                    <Col xs={6} sm={6} md={4} lg={4} className="shisha-col-cafe shisha-col-border-bottom-right">
                      <div className="shisha-section1-info-button-innerwrapper-cafe">
                          <div className="shisha-section1-info-button-lg-image-wrapper-cafe">
                            <Image className="" src="/images/navigation-2 (1) 1.svg" alt="React Logo" fluid/>
                           </div>
                           <div className="shisha-section1-info-button-xs-image-wrapper-cafe">
                            <Image className="" src="/images/navigation-2 (1) 1.svg" alt="React Logo" fluid/>
                           </div>
                          <p className="shisha-section1-info-button-lg-title-cafe">Address</p>
                          <p className="shisha-section1-info-button-lg-subtitle-cafe">Platenstr. 12, 90441 Nürnberg</p>
                          <div>
                            <p className="shisha-section1-info-button-xs-title-cafe">Address</p>
                            <p className="shisha-section1-info-button-xs-subtitle-cafe">Platenstr. 12, 90441 Nürnberg</p>
                          </div>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4} className="shisha-col-cafe shisha-col-border-bottom">
                      <div className="shisha-section1-info-button-innerwrapper-cafe">
                          <div className="shisha-section1-info-button-lg-image-wrapper-cafe">
                            <Image className="" src="/images/navigation-2 (1) 2.svg" alt="React Logo" fluid/>
                           </div>
                           <div className="shisha-section1-info-button-xs-image-wrapper-cafe">
                            <Image className="" src="/images/navigation-2 (1) 1.svg" alt="React Logo" fluid/>
                           </div>
                          <p className="shisha-section1-info-button-lg-title-cafe">Telefon</p>
                          <p className="shisha-section1-info-button-lg-subtitle-cafe">+4991148075775</p>
                          <div>
                            <p className="shisha-section1-info-button-xs-title-cafe">Address</p>
                            <p className="shisha-section1-info-button-xs-subtitle-cafe">Platenstr. 12, 90441 Nürnberg</p>
                          </div>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4} className="shisha-col-cafe shisha-col-border-top-right">
                      <div className="shisha-section1-info-button-innerwrapper-cafe">
                          <div className="shisha-section1-info-button-lg-image-wrapper-cafe">
                            <Image className="" src="/images/browser 1.svg" alt="React Logo" fluid/>
                           </div>
                           <div className="shisha-section1-info-button-xs-image-wrapper-cafe">
                            <Image className="" src="/images/navigation-2 (1) 1.svg" alt="React Logo" fluid/>
                           </div>
                          <p className="shisha-section1-info-button-lg-title-cafe">Website</p>
                          <p className="shisha-section1-info-button-lg-subtitle-cafe">www.lemoonbar.de</p>
                          <div>
                            <p className="shisha-section1-info-button-xs-title-cafe">Address</p>
                            <p className="shisha-section1-info-button-xs-subtitle-cafe">Platenstr. 12, 90441 Nürnberg</p>
                          </div>
                      </div>
                    </Col>

                    <Col xs={0} sm={0} md={2} lg={2} className="shisha-col-cafe shisha-section1-info-button-temp-innerwrapper-cafe">
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4} className="shisha-col-cafe shisha-col-border-top">
                      <div className="shisha-section1-info-button-innerwrapper-cafe">
                          <div className="shisha-section1-info-button-lg-image-wrapper-cafe">
                            <Image className="" src="/images/navigation-2 (1) 3.svg" alt="React Logo" fluid/>
                           </div>
                           <div className="shisha-section1-info-button-xs-image-wrapper-cafe">
                            <Image className="" src="/images/navigation-2 (1) 1.svg" alt="React Logo" fluid/>
                           </div>
                          <p className="shisha-section1-info-button-lg-title-cafe">Work Hours</p>
                          <p className="shisha-section1-info-button-lg-subtitle-cafe">Montag - Freitag :18:00 Uhr - 05:00 Uhr</p>
                          <p className="shisha-section1-info-button-lg-subtitle-cafe"> Samstag:18:00 Uhr - 05:00 Uhr</p>
                          <p className="shisha-section1-info-button-lg-subtitle-cafe"> Sonntag:18:00 Uhr - 05:00 Uhr</p>
                          <div>
                            <p className="shisha-section1-info-button-xs-title-cafe">Address</p>
                            <p className="shisha-section1-info-button-xs-subtitle-cafe">Platenstr. 12, 90441 Nürnberg</p>
                          </div>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={4} lg={4} className="shisha-col-cafe shisha-section1-info-button-temp-innerwrapper-cafe">
                      <div className="shisha-section1-info-button-innerwrapper-cafe">
                          <div className="shisha-section1-info-button-lg-image-wrapper-cafe">
                            <Image className="" src="/images/browser 2.svg" alt="React Logo" fluid/>
                           </div>
                          <p className="shisha-section1-info-button-lg-title-cafe">Address</p>
                          <p className="shisha-section1-info-button-lg-subtitle-cafe">Platenstr. 12, 90441 Nürnberg</p>
                      </div>
                    </Col>
                    <Col xs={0} sm={0} md={2} lg={2} className="shisha-col-cafe shisha-section1-info-button-temp-innerwrapper-cafe">
                    </Col>
                </Row>
            </div>

            

            <div className="shisha-section1-info-xs-features-cafe">
                <p className="shisha-section1-info-features-label-cafe">Cafe Features</p>
                <div className="shisha-section1-info-featurebuttons-wrapper-cafe">
                    <Row className="shisha-row-cafe">
                        <Col xs={3}  className="shisha-col-cafe">
                          <div className="shisha-section1-info-featurebuttons-innerwrapper-cafe">
                            <Image className="" src="/images/television 1.png" alt="React Logo" fluid/>
                            <p className="shisha-section1-info-featurebuttons-comment-cafe">TV</p>
                          </div>
                        </Col>
                        <Col xs={3}  className="shisha-col-cafe">
                          <div className="shisha-section1-info-featurebuttons-innerwrapper-cafe">
                            <Image className="" src="/images/soft-drink 1.png" alt="React Logo" fluid/>
                            <p className="shisha-section1-info-featurebuttons-comment-cafe">Drink</p>
                          </div>
                        </Col>
                        <Col xs={3}  className="shisha-col-cafe">
                          <div className="shisha-section1-info-featurebuttons-innerwrapper-cafe">
                            <Image className="" src="/images/credit-card 1.png" alt="React Logo" fluid/>
                            <p className="shisha-section1-info-featurebuttons-comment-cafe">POS</p>
                          </div>
                        </Col>
                        <Col xs={3}  className="shisha-col-cafe">
                          <div className="shisha-section1-info-featurebuttons-innerwrapper-cafe">
                            <Image className="" src="/images/football 1.png" alt="React Logo" fluid/>
                            <p className="shisha-section1-info-featurebuttons-comment-cafe">Drink</p>
                          </div>
                        </Col>
                    </Row>
                    <Row className="shisha-row-cafe">
                        <Col xs={3}  className="shisha-col-cafe">
                          <div className="shisha-section1-info-featurebuttons-innerwrapper-cafe">
                           
                          </div>
                        </Col>
                        <Col xs={3}  className="shisha-col-cafe">
                          <div className="shisha-section1-info-featurebuttons-innerwrapper-cafe">
                            <Image className="" src="/images/soft-drink 1.png" alt="React Logo" fluid/>
                            <p className="shisha-section1-info-featurebuttons-comment-cafe">TV</p>
                          </div>
                        </Col>
                        <Col xs={3}  className="shisha-col-cafe">
                          <div className="shisha-section1-info-featurebuttons-innerwrapper-cafe">
                            <Image className="" src="/images/credit-card 1.png" alt="React Logo" fluid/>
                            <p className="shisha-section1-info-featurebuttons-comment-cafe">POS</p>
                          </div>
                        </Col>
                        <Col xs={3}  className="shisha-col-cafe">
                          <div className="shisha-section1-info-featurebuttons-innerwrapper-cafe">
                            
                          </div>
                        </Col>
                    </Row>
                </div>
            </div>
                
            

           </div>
        </Container>
        
);
export default SectionInfo;