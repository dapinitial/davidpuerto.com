import React, {Component} from 'react';
import '../Welcome.css';
import Home from '../Home/Home';
import 'raf/polyfill';

const welcome = "Sup";

const loadHome = () => {
  window
    .location
    .assign('/home');
};

class Welcome extends Component {

  render() {
    return (
      <div className='welcomeBackground'>
        <h2>{welcome}</h2>
        <Home/>
      </div>
    );
  }
}

export default Welcome;
