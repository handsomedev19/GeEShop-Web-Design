import {Navbar, Nav, NavDropdown,Image, Row, Col, Container, Form, FormControl, Button} from 'react-bootstrap';

import SectionHeaderWithPinkLogo from './SectionHeaderWithPinkLogo'


const SectionStories = () =>(

	<Container fluid className="shisha-container-fluid-cafe shisha-container-fluid-section1-wrapper-cafe ">
        <div className="shisha-container-fluid-section1-cafe ">          
           
           <SectionHeaderWithPinkLogo />
            <div className="shisha-section1-stories-wrapper-cafe ">
                <Row className="row-shisha">
                  <Col xs={6} sm={6} md={4} lg={4} className="col-shisha">
                    <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <div className="small-tile-image-holder-for-section-stories">
                            <img className="small-tile-image-for-section-stories" src="/images/SmallTile1.svg"/>
                            <img className="small-tile-logo" src="/images/RoundLogo1.svg"/>
                        </div>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="col-shisha">
                    <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <div className="small-tile-image-holder-for-section-stories">
                            <img className="small-tile-image-for-section-stories" src="/images/SmallTile2.svg"/>
                            <img className="small-tile-logo" src="/images/RoundLogo1.svg"/>
                        </div>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="col-shisha">
                    <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <div className="small-tile-image-holder-for-section-stories">
                            <img className="small-tile-image-for-section-stories" src="/images/SmallTile3.svg"/>
                            <img className="small-tile-logo" src="/images/RoundLogo1.svg"/>
                        </div>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="col-shisha">
                    <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <div className="small-tile-image-holder-for-section-stories">
                            <img className="small-tile-image-for-section-stories" src="/images/SmallTile4.svg"/>
                            <img className="small-tile-logo" src="/images/RoundLogo1.svg"/>
                        </div>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="col-shisha">
                    <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <div className="small-tile-image-holder-for-section-stories">
                            <img className="small-tile-image-for-section-stories" src="/images/RoomPic1.svg"/>
                            <img className="small-tile-logo" src="/images/RoundLogo1.svg"/>
                        </div>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={4} lg={4} className="col-shisha">
                    <div className="shisha-section1-portfolio-image-wrapper-cafe">
                        <div className="small-tile-image-holder-for-section-stories">
                            <img className="small-tile-image-for-section-stories" src="/images/RoomPic2.svg"/>
                            <img className="small-tile-logo" src="/images/RoundLogo1.svg"/>
                        </div>
                    </div>
                  </Col>
                  
                  </Row>
            </div>

            

        </div>
  </Container>

);
export default SectionStories;