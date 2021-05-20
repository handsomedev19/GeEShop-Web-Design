import {Navbar, Nav, NavDropdown,Image,Jumbotron, Container} from 'react-bootstrap';
import styles from '../styles/header.module.scss'


const HeaderWithoutNavbar = () =>(
    <div>    
      <header>  
           <div className="header-holder ">
            <img className="header-image" src="/images/HeaderBackground.svg"  />
            <div className="header-icon-holder ">
                <p className="header-time-text">9:41</p>
                <div className="header-icon-group ">
                  <img className="header-icon-cellular-connection" src='/images/CellularConnection.svg'/>
                  <img className="header-icon-wifi" src='/images/Wifi.svg'/>
                  <img className="header-icon-battery" src='/images/Battery.svg'/>
                </div>
            </div>
            <div className="header-holder-without-image">
              <div className="header-logo-and-login-button-flexbox">
                <img className="logo-image" src="/images/logo.svg" alt="React Logo" />  
                <button className="header-button"><span className="header-button-text"><strong className="header-button-strong-text">LOGIN WITH</strong>&nbsp;FACEBOOK</span></button> 
              </div>
            <h3 className="header-title-body"><span className="header-title-strong">Start searching for</span>&nbsp;<span className="header-title">your cafe</span></h3>
            <h6 className="header-subtitle-body">Have a good time with your friends.</h6>
            <div className="search-box-flex-box">
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
export default HeaderWithoutNavbar;