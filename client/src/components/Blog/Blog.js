import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';

let backgroundImage = 'http://localhost:3000/images/japanuary.jpg';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let blog = document.getElementById('blog-dap');

    blog.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  render() {
    return (
      <div id="blog-dap" className="content flex">
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
                <span>my blog</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <section id="blog" className="line blog">
            <div className="container line">
              <div className="section-title">
                <div className="sect-subtitle">
                  <span>Blog</span>
                </div>
                <h3>1/25/2018</h3>
                <h2>Japanuary</h2>
                <div className="st-separator"></div>
              </div>
              <div className="section-body line">
                <h3 className="text-title">No man, I don't eat pork</h3>
                <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped
                  to my shirt with my name printed on it? Do you see a little Asian child with a
                  blank expression on his face sitting outside on a mechanical helicopter that
                  shakes when you put quarters in it? No? Well, that's what you see at a toy
                  store. And you must think you're in a toy store, because you're here shopping
                  for an infant named Jeb.
                </p>
                <h3 className="text-title">Uuummmm, this is a tasty burger!</h3>
                <p>Well, the way they make shows is, they make one show. That show's called a
                  pilot. Then they show that show to the people who make shows, and on the
                  strength of that one show they decide if they're going to make more shows. Some
                  pilots get picked and become television programs. Some don't, become nothing.
                  She starred in one of the ones that became nothing.
                </p>
                <Link to="/folio" className="btn hide-icon">
                  <i className="fa fa-angle-right"></i>
                  <span>Read More</span>
                </Link>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Blog;