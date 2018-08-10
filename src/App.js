import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header-footer/Header'
import Featured from './components/featured/index'
import Info from './components/info/index';
import Highlights from './components/Highlights/index'
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header-footer/Footer';
import { Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px", background:"cornflow"}}>


       <Header/>

       <Element name="featured">
       <Featured/>
       </Element>

       <Element name="venue">
       <Info/>
       </Element>


       <Element name="highlights">
       <Highlights/>
       </Element>

      <Element name="pricing">

       <Pricing/>
       </Element>
    <Element name="location">
    <Location/>
    </Element>
       <Footer/>
      </div>
    );
  }
}

export default App;
