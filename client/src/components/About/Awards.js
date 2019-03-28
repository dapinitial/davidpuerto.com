import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

let hackHousingImage = 'http://localhost:3000/images/hackhousing.jpg';

class Awards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        items: 1,
        loop: true,
        margin: 30,
        nav: true,
        navText: [
          "<i className='fas fa-chevron-left'></i>", "<i className='fas fa-chevron-right'></i>"
        ],
        responsiveClass: true
      }
    };
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="section-title">
            <div className="sect-subtitle">
              <span>Awards</span>
            </div>
            <h3>What I've Won</h3>
            <h2>Awards &amp; Publicity</h2>
            <div className="st-separator"></div>
          </div>

        </div>
        <OwlCarousel
          className=""
          {...this.state.options}
          singleitem="true"
          autoheight="true">
          <div className="item">
            <img
              src={hackHousingImage}
              alt="David Puerto winning Zillow's #hackHousing Hackathon 2015 Geekwire.com"/>
            <h3>Zillow #hackHousing - UW, Census.gov, Data.gov, Housing Bureau, and more</h3>
            <p>
              Hacking the housing market: Tech teams use open data to help people find
              affordable homes.</p>
            <p>
              <em className="italics">This special series focuses on important community
                issues, innovative solutions to societal challenges, and people and non-profit
                groups making an impact through technology.</em>
            </p>

            <Link
              to="http://www.geekwire.com/2015/hacking-housing-market-tech-teams-use-open-data-help-people-find-affordable-homes/"
              target="_blank"
              className="btn hide-icon"
              onClick={(event) => {
              event.preventDefault();
              window.open(this.makeHref("http://www.geekwire.com/2015/hacking-housing-market-tech-teams-use-open-data-hel" +
                  "p-people-find-affordable-homes/"));
            }}>
              <i className="fa fa-angle-right"></i>
              <span>Via GeekWire</span>
            </Link>
          </div>
        </OwlCarousel>
      </div>
    )
  }
}

export default Awards;