import Head from 'next/head';
import Layout from '../components/Layout';
import SideMenu from '../components/SideMenu';
import GridShow from '../components/GridShow';
import { Row, Col, Container } from 'react-bootstrap';
const name = 'Your Name'
export const siteTitle = 'Beste Shisha Bar, Lounge & Shop - shishatrip'
export default function Home() {
  return (
    <div>
      <Head>                
        <meta
          name="description"
          content="shisha, Shisha Lounge, Shisha Bar, Shisha Cafes & Shisha Shops auf Shishatrip, Shisha Cafés Nürnberg"
        />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <script src="https:code.jquery.com/jquery-3.4.1min.js"></script>  
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>    
      </Head>
      <Layout home>
        <div className="main-area">  
      <div className="side-menu">
      <SideMenu/>
      </div>
      <div className="main">
      <GridShow/>
      </div>
      </div>
        {/* <Container fluid className="container-shisha">
          <Row noGutters className="row-shisha">
            <Col  md={6} lg={4} xl={3} className="col-shisha">
              <SideMenu/>
            </Col>
            <Col sm={12} md={6} lg={8} xl={9} className="col-shisha">
              <GridShow/>
            </Col>
          </Row>
        </Container>   */}
        
      </Layout>
    </div>
    
    
  )
}