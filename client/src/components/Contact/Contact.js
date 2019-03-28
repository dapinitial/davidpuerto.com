import React, {Component} from 'react';
import helpers from '../../utils/helpers';
import Footer from '../Footer/Footer.js';

let backgroundImage = 'http://localhost:3000/images/phonebooth.jpg';

const initialState = {
  name: "",
  email: "",
  message: ""
};

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    helpers.postSendEmail(this.state.name, this.state.email, this.state.message);
    this.setState({
      name: "",
      email: "",
      message: "Thank you for your message, " + this.state.name + "!"
    });
  }

  componentDidMount() {
    let contact = document.getElementById('contact-dap');

    contact.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  render() {
    return (
      <div id="contact-dap" className="content flex">
        <div className="left-column">
          <div
            className="fixed-column"
            style={{
            backgroundImage: `url(${backgroundImage})`
          }}>
            <div className="bg-wrapper">
              <div className="bg bg-scroll"></div>
              <div className="overlay"></div>
              <div className="bg-title">
                <span>Contact me</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <section id="sec1" className="contact line">
            <div className="container">
              <div className="section-title">
                <div className="sect-subtitle">
                  <span>Contact</span>
                </div>
                <h3>Let's rap</h3>
                <h2>Contact me</h2>
                <div className="st-separator"></div>
              </div>
              <div className="section-body">
                <h3 className="text-title">E.T. Phone Home</h3>
                <p>
                  You know the feeling: Receiving a *real* letter or a postcard? That's those feel
                  goofs when I get messages from this website. So, go ahead, don't be shy, fill
                  out the form below and start a correspondance with yours truly. You'll be glad
                  you did.&nbsp;&#9786;
                </p>
                <div className='formContainer'>
                  <form id="contact-form" onSubmit={this.handleSubmit}>
                    <div className=''>
                      <input
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Your name"
                        className="validate"
                        required/>
                      <input
                        id="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Your email address"
                        className="validate"
                        required/>
                    </div>
                    <div className='formText'>
                      <textarea
                        id="message"
                        type="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        placeholder="Message"
                        className="validate"
                        required
                        rows="8"
                        cols="50"/>
                    </div>
                    <div className='submitButton'>
                      <button type="submit" id="submit-message" className="btn hide-icon">
                        <i className="fa fa-angle-right"></i>
                        <span>Send Email</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="contact-info">
                  <span>Give me a moment while I respond thoughtfully.</span>
                </div>
              </div>
            </div>
          </section>
          <Footer className="line"/>
        </div>
      </div>
    );
  }
}
export default Contact;