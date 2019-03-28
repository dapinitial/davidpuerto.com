import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class FolioPieceNav extends Component {
  render() {
    return (
      <div className="filter-holder fixed-filter in-anim">
        <div className="gallery-filters">
          <ul>
            <li>
              <Link
                to="portfolio.html#"
                className="gallery-filter gallery-filter-active"
                data-filter="*">
                <span>All</span>
              </Link>
            </li>
            <li>
              <Link to="portfolio.html#" className="gallery-filter " data-filter=".facebook">
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link to="portfolio.html#" className="gallery-filter " data-filter=".sonosite">
                <span>SonoSite</span>
              </Link>
            </li>
            <li>
              <Link to="portfolio.html#" className="gallery-filter " data-filter=".hackathon">
                <span>#hackHousing</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FolioPieceNav;