import {Navbar, Nav, NavDropdown,Image, Row, Col, Container, Form, FormControl, Button, Card} from 'react-bootstrap';
import Uparrow from '../../public/images/Uparrow.svg';


const SectionRecommend = () =>(

        <Container fluid className="shisha-container-fluid-cafe">
          <div className="shisha-container-fluid-sectionrecommend-cafe">          
            <div className="shisha-sectionrecommend-header-cafe">
              <p className="shisha-sectionrecommend-header-text-cafe">
                  Recommended Places
              </p>
              <a className="shisha-sectionrecommend-header-subtext-cafe">
                  View All >
              </a>
            </div>

            <div className="shisha-sectionrecommend-recommended-portfolio-wrapper-cafe">
              <Row className="shisha-row-cafe">
                <Col className="col-image-text-card" xs={12} sm={6} md={4} lg={6} xl={4}>
                        <div className="card-holder">
                            <Card className="individual-card">
                                <Card.Img className="card-img"variant="top" src="/images/HomePic1.svg" />
                                <Card.ImgOverlay className="card-image-overlay-content"><Button className="card-overlay-button" ></Button></Card.ImgOverlay>
                                <Card.Body className="individual-card-body">
                                    <Card.Title className="card-title-for-desktop">Medusa Shisha Lounge</Card.Title>
                                        <Card.Link className="votes-link" href="#"><Uparrow className="up-arrow" /><span className="votes-span">15 up</span></Card.Link>
                                        <Card.Title className="card-title-for-mobile">Medusa Shisha Lounge</Card.Title>
                                        <Button className="card-button" ></Button>
                                    <Card.Text className="card-text">Adam-Klein-Straße 110, 90431 Nürnberg</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                <Col className="col-image-text-card" xs={12} sm={6} md={4} lg={6} xl={4}>
                    <div className="card-holder">
                        <Card className="individual-card">
                            <Card.Img className="card-img"variant="top" src="/images/HomePic2.svg" />
                            <Card.ImgOverlay className="card-image-overlay-content"><Button className="card-overlay-button" ></Button></Card.ImgOverlay>
                            <Card.Body className="individual-card-body">
                                <Card.Title className="card-title-for-desktop">Medusa Shisha Lounge</Card.Title>
                                    <Card.Link className="votes-link" href="#"><Uparrow className="up-arrow" /><span className="votes-span">15 up</span></Card.Link>
                                    <Card.Title className="card-title-for-mobile">Medusa Shisha Lounge</Card.Title>
                                    <Button className="card-button" ></Button>
                                <Card.Text className="card-text">Adam-Klein-Straße 110, 90431 Nürnberg</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col className="col-image-text-card" xs={12} sm={6} md={4} lg={6} xl={4}>
                        <div className="card-holder">
                            <Card className="individual-card">
                                <Card.Img className="card-img"variant="top" src="/images/HomePic3.svg" />
                                <Card.ImgOverlay className="card-image-overlay-content"><Button className="card-overlay-button" ></Button></Card.ImgOverlay>
                                <Card.Body className="individual-card-body">
                                    <Card.Title className="card-title-for-desktop">Medusa Shisha Lounge</Card.Title>
                                        <Card.Link className="votes-link" href="#"><Uparrow className="up-arrow" /><span className="votes-span">15 up</span></Card.Link>
                                        <Card.Title className="card-title-for-mobile">Medusa Shisha Lounge</Card.Title>
                                        <Button className="card-button" ></Button>
                                    <Card.Text className="card-text">Adam-Klein-Straße 110, 90431 Nürnberg</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    
                    
                    
                
              </Row>
            </div>
            

          </div>
        </Container>
        
);
export default SectionRecommend;