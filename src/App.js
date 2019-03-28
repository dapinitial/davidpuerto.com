import React, {Component} from 'react';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <a
            className="App-link"
            href="https://www.spacelabforever.com"
            target="_blank"
            rel="noopener noreferrer">
            spacelabforever.com
          </a>
        </header>
      </div>
    );
  }
}

export default App;
