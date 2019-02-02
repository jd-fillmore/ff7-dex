import React, { Component } from 'react';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero text="Welcome to the Final Fantasy 7 Dex."></Hero>
        <Footer text='Powered by Reactjs, Flexbox and SCSS.'></Footer>
      </div>
    );
  }
}

export default App;
