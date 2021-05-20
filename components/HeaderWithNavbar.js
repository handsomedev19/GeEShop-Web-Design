
import {Navbar, Nav, NavDropdown,Image} from 'react-bootstrap';
import styles from '../styles/HeaderWithNavbar.module.scss'
import HeaderWithoutNavbar from './HeaderWithoutNavbar';


const HeaderWithNavbar = () =>(
    <div>    
      <header>       
      <div className="header-holder ">
            <img className="header-image" src="/images/HeaderBackgroundFor1440.svg"  />
            <div className="header-icon-holder ">
                <p className="header-time-text">9:41</p>
                <div className="header-icon-group ">
                  <img className="header-icon-cellular-connection" src='/images/CellularConnection.svg'/>
                  <img className="header-icon-wifi" src='/images/Wifi.svg'/>
                  <img className="header-icon-battery" src='/images/Battery.svg'/>
                </div>
            </div>
            <div className="header-holder-without-image-for-1440">
              <div className="header-logo-and-login-button-flexbox">
                <img className="logo-image logo-image-for-1440" src="/images/logo.svg" alt="React Logo" />  
                <Navbar  expand="lg" className="shisha-top-nav-bar" >
                    <Navbar.Toggle aria-controls="shisha-top-nav-link" className="shisha-top-nav-toggler"/>
                    <Navbar.Collapse id="shisha-top-nav-link">
                        <Nav className="mr-auto">
                            <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-item" href="#link">Places</Nav.Link>
                            <Nav.Link className="nav-item" href="#link">Search</Nav.Link>
                            <Nav.Link className="nav-item" href="#link">Profile</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> 
                <button className="header-button"><span className="header-button-text"><strong className="header-button-strong-text">LOGIN WITH</strong>&nbsp;FACEBOOK</span></button> 
              </div>
            <div className="shisha-header-3buttons-wrapper-cafe">
                        <Image className="shisha-header-close-outline2-cafe" src="/images/close-outline (2) 1.svg" alt="React Logo" />
                    <div class="shisha-header-2buttons-wrapper-cafe">
                        <Image className="shisha-header-button-cafe" src="/images/Go.svg" alt="React Logo" />
                        <Image className="shisha-header-button-cafe" src="/images/Call Now.svg" alt="React Logo" />
                    </div>  
            </div>
            <h3 className="header-title-body-for-1440"><span className="header-title-strong">Start searching for</span>&nbsp;<span className="header-title">your cafe</span></h3>
            <h6 className="header-subtitle-body">Have a good time with your friends.</h6>
            <div className=" search-box-flex-box search-box-flex-box-for-1440">
              <div className="search-box">
                <input type="text" className="form-control header-search-input"  id="headerSearchBox" />
                  <div className="search-icon-placeholder-group">
                    <img className="search-icon" src="/images/search.svg" alt="search icon" /> 
                    <span className="search-box-placeholder-span" data-alttext="Search Topic"><span>Search for a hookah cafe.</span></span>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </header>
    </div>
);
export default HeaderWithNavbar;