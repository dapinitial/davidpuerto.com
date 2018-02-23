import React, {Component} from 'react';
import Subnav from '../Subnav/Subnav.js';
import {Link} from 'react-router-dom';
import FolioNav from './FolioNav.js';
import Footer from '../Footer/Footer.js';

let backgroundImage = 'http://localhost:3000/images/whiteboard.jpg';

class Folio extends Component {
  componentDidMount() {
    let about = document.getElementById('folio-dap');

    about.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  render() {
    return (
      <div id="folio-dap" className="content flex">
        <Subnav section='folio'/>
        <div className="left-column">
          <div
            className="fixed-column"
            style={{
            backgroundImage: `url(${backgroundImage})`
          }}>
            <div className="bg-wrapper">
              <div className="bg bg-scroll"></div>
              <div className="overlay"></div>
              <div className="bg-title">
                <span>my folio</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <FolioNav/>
          <section id="sec1" className="folio">
            <div className="container">
              <div className="section-title">
                <div className="sect-subtitle">
                  <span>Folio</span>
                </div>
                <h3>What I've been doing</h3>
                <h2>Puertofolio</h2>
                <div className="st-separator"></div>
              </div>
              <div className="section-body">
                <h3 className="text-title">It has been an honor</h3>
                <p>
                  I would love to share my full portfolio with you. As to not potentially violate
                  any NDA's with competitors, I screen requests. Interested parties: Please make a
                  formal &nbsp;<Link to="/contact">inquiry</Link>&nbsp;
specifying the samples you wish me to share. Along with this request, please
include who you are and who you represent and what the nature of your industry
is. Conversely, the sheer breadth of my work that I am proud of has now become
overwhelming... and that's a UX problem I choose to pass on solving for now!
&#9786;
                </p>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Folio;