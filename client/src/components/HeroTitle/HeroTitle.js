import React, {Component} from 'react';
// import Clock from '../Clock/Clock.js';

class HeroTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let words = ['Hello World.', 'Experience Designs', 'Developed by David Puerto in Seattle', 'Website work in process.'];
    let colors = ['rgba(0,0,0,.85)', '#ff3300', 'rgba(0,0,0,.85)'];
    if (colors === undefined) 
      colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById('text')
    target.setAttribute('style', 'color:' + colors[0]);
    window.setInterval(function () {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
    window.setInterval(function () {
      if (visible === true) {
        con.className = 'console-underscore hidden';
        visible = false;

      } else {
        con.className = 'console-underscore';

        visible = true;
      }
    }, 400);
  }

  render() {
    return (
      <div className="hero-title">
        <div className="hero-wrap">
          <div className='console-container'>
            <span id='text'></span>
            <div className='console-underscore' id='console'>&#95;</div>
          </div>
        </div>
        {/* <Clock deadline={this.state.deadline}/> */}
      </div>
    )
  }
}

export default HeroTitle;