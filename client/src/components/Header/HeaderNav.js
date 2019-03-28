import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class HeaderNav extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <div
        className={this.props.reveal
        ? "nav-inner vismen"
        : "nav-inner"}>
        <div className="nav-decor nav-decor-tl"></div>
        <div className="nav-decor nav-decor-br"></div>
        <div className="overlay"></div>
        <nav style={{
          marginTop: -87 + 'px'
        }}>
          <ul>
            <li>
              <Link onClick={this.handleClick} to='/about'>About</Link>
            </li>
            <li>
              <Link onClick={this.handleClick} to='/blog'>Blog</Link>
            </li>
            <li className="subnav">
              <div className="subnavicon">Folio
              </div>
              <ul className="hidden">
                <li>
                  <Link to="/folio">Check back often</Link>
                </li>
                {/* <li>
                  <Link to="/folio" className="custom-scroll-link">Facebook</Link>
                </li>
                <li>
                  <Link to="/folio" className="custom-scroll-link">SonoSite</Link>
                </li>
                <li>
                  <Link to="/folio" className="custom-scroll-link">Zillow</Link>
                </li>
                <li>
                  <Link to="/folio" className="custom-scroll-link">Starbucks</Link>
                </li>
                <li>
                  <Link to="/folio" className="custom-scroll-link">WebMD</Link>
                </li> */}
              </ul>
            </li>
            <li>
              <Link onClick={this.handleClick} to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div >
    )
  }
}

export default HeaderNav;