import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

class FolioNav extends Component {
  componentDidMount() {

    Events
      .scrollEvent
      .register('begin', function (to, element) {
        //console.log("begin", arguments);
      });

    Events
      .scrollEvent
      .register('end', function (to, element) {
        //console.log("end", arguments);
      });

    scrollSpy.update();

  }
  componentWillUnmount() {
    Events
      .scrollEvent
      .remove('begin');
    Events
      .scrollEvent
      .remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }

  render() {
    return (
      <div className="scroll-nav-holder">
        <nav className="scroll-nav">
          <ul>
            <li>
              <Link
                activeClass="act-link"
                className='scroll-link'
                to="sec1"
                spy={true}
                smooth={true}
                offset={-50}
                duration={187}
                onSetActive={this.handleSetActive}>

                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="act-link"
                className='scroll-link'
                to="sec2"
                spy={true}
                smooth={true}
                offset={-50}
                duration={187}
                onSetActive={this.handleSetActive}>

                <span>SonoSite</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="act-link"
                className='scroll-link'
                to="sec3"
                spy={true}
                smooth={true}
                offset={-50}
                duration={187}
                onSetActive={this.handleSetActive}>

                <span>#hackHousing</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="act-link"
                className='scroll-link'
                to="sec4"
                spy={true}
                smooth={true}
                offset={-50}
                duration={187}
                onSetActive={this.handleSetActive}>

                <span>Starbucks</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="act-link"
                className='scroll-link'
                to="sec5"
                spy={true}
                smooth={true}
                offset={-50}
                duration={187}
                onSetActive={this.handleSetActive}>

                <span>WebMD</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="act-link"
                className='scroll-link'
                to="sec6"
                spy={true}
                smooth={true}
                offset={-50}
                duration={187}
                onSetActive={this.handleSetActive}>

                <span>You?</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default FolioNav;