import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Blog from './Blog/Blog.js';
import Folio from './Folio/Folio.js';

const App = () => (
  <Router>
    <main>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/folio" component={Folio}/>
      <Route path="/contact" component={Contact}/>
    </main>
  </Router>
)
export default App;
