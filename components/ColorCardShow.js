

import {Row, Col, Button, Image,Container,Card}from 'react-bootstrap';
const ColorCardShow = () =>(
    <div>
        <Container fluid={true}>
            <Row>
                <Col  className="col-color-card" xs={12} md={6}>
                    <div className="color-card">
                        <Image className="pink-color-card-background "  src="/images/PinkColorCardBackground.svg" fluid></Image>
                        <Image className="color-card-logo" src="/images/Logo.svg"></Image>
                    </div>
                </Col>
                <Col  className="col-color-card " xs={12} md={6}>
                    <div className="black-color-card ">
                        <Image className="black-color-card-background"  src="/images/BlackColorCardBackground.svg" fluid></Image>
                            <div className="black-color-card-description-holder ">
                                <Image className="black-card-img " src="images/BlackColorCardTitleHand.svg"></Image>   
                                <p className="black-card-descrption ">Add your cafe and reach thousands of people fast.<br></br>
                                Start new customer and experience.</p>
                                <Button className="black-color-card-button " variant="primary"><span className="black-color-card-button-caption">Add Now</span></Button>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);
export default ColorCardShow;