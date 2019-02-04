import React, { Component } from 'react';

// Components
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';

// Styles
import "./components/card-overview/card-overview.scss";
import "./components/base/base.scss";
import "./components/sidebar/sidebar.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="main">
          <div className="container">
            <div className="col">
              <Sidebar></Sidebar>
            </div>
            <div className="col">
              <Content></Content>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;