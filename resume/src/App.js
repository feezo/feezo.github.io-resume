import React, { Component } from 'react';
import Header from './components/header';
import ContactUs from './components/contactUs';
import Footer from './components/footer'
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Testimonials from  './components/testimonials';
import About from './components/about';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
