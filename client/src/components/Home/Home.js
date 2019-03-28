import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Loader from 'react-loaders';
import About from '../About/About.js';
import Blog from '../Blog/Blog.js';
import Folio from '../Folio/Folio.js';
import Contact from '../Contact/Contact.js';
import HeroTitle from '../HeroTitle/HeroTitle.js';
import '../../images/d.svg';

let backgroundImage = 'http://localhost:3000/images/threeFingersLookout.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: 'https://youtu.be/6D-A6CL3Pv8'
    };
  }

  _onReady(event) {}

  render() {

    return (
      <Router>
        <div className='wrapper'>
          <Loader type='dap-loader'/>
          <div className='hero-wrapper'>
            <div className=''>
              <div
                className='full-section-container'
                style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                overflow: 'hidden'
              }}>
                <div className='player-wrapper'></div>
                <HeroTitle/>
              </div>
            </div>
            <Route path='/about' component={About}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/folio' component={Folio}/>
            <Route path='/contact' component={Contact}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;