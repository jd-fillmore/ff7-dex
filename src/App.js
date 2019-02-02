import React, { Component } from 'react';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero></Hero>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
