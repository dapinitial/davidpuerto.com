import React, {Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: 'February 22, 2018',
      newDeadline: '',
      countdownEvent: 'Site launch:'
    };
  }

  changeDeadline() {
    //console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
  }

  componentWillMount() {
    this.getTimeUntil(this.state.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  // leading0(num) {   if (num < 10) {     return '0' + num   }   return num; }

  leading0(num) {
    return num < 10
      ? '0' + num
      : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div className="countdown text-center">
        <div className="Clock-title">{this.state.countdownEvent}</div>
        <br/>
        <div className="days">{this.leading0(this.state.days)}
          <span>
            &nbsp;days</span>
        </div>
        <div className="hours">{this.leading0(this.state.hours)}
          <span>
            &nbsp;hours</span>
        </div>
        <div className="minutes">{this.leading0(this.state.minutes)}
          <span>
            &nbsp;minutes</span>
        </div>
        <div className="seconds">{this.leading0(this.state.seconds)}
          <span>
            &nbsp;seconds</span>
        </div>
      </div>
    )
  }
}

export default Clock;
