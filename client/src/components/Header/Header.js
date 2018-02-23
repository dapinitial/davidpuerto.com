import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HeaderNav from './HeaderNav.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reveal: false
    };

  }

  toggleClass() {
    const currentState = this.state.reveal;
    this.setState({
      reveal: !currentState
    });
  }

  render() {
    return (
      <div>
        <header className='header'>
          <div className="logo-holder">
            <Link className='nameLink' to='/home'>
              <svg viewBox='0 0 107 63' width='107px' height='63px'>
                <use xlinkHref='#icon-d-dot'></use>
              </svg>
            </Link>
          </div>
          <div
            onClick={() => this.toggleClass()}
            className={this.state.reveal
            ? "nav-button cmenu"
            : "nav-button"}>
            <span className="nos"></span>
            <span className="ncs"></span>
            <span className="nbs"></span>
          </div>
        </header>
        <HeaderNav reveal={this.state.reveal}/>
      </div>
    )
  }
}

export default Header;