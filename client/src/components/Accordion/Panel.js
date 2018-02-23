import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el
        .querySelector('.panel__inner')
        .scrollHeight;
      this.setState({height});
    }, 333);
  }

  render() {
    const {
      icon,
      dates,
      company,
      officeLocation,
      title,
      skills,
      summary,
      links,
      activeTab,
      index,
      activateTab
    } = this.props;
    const {height} = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: isActive
        ? `${height}px`
        : '0px'
    }

    return (
      <div className='panel' role='tabpanel' aria-expanded={isActive}>
        <button className='panel__label' role='tab' onClick={activateTab}>
          <i className={icon}></i>
          <span className="dates">{dates}</span>&nbsp;
          <span className="company">{company}</span>&nbsp; {/* <span className="officeLocation">{officeLocation}</span> */}
        </button>
        <div className='panel__inner' style={innerStyle} aria-hidden={!isActive}>
          <div className='panel__content'>
            <h4>{title}</h4>
            <ul>
              {skills.map((skill, index) => {
                return (
                  <li key={index} index={index}>
                    {skill}
                  </li>
                )
              })}
            </ul>
            <p>
              {summary}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;