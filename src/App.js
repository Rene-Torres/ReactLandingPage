import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header-footer/Header'
import Featured from './components/featured/index'
import Info from './components/info/index';
import Highlights from './components/Highlights/index'

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        height:"1500px", background:"blue"
      }}>
       <Header/>
       <Featured/>
       <Info/>
       <Highlights/>
      </div>
    );
  }
}

export default App;
