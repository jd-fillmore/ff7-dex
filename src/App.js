import React, { Component } from "react";

// Components
import Content from "./components/content/content";
import Sidebar from "./components/sidebar/sidebar";

// Styles
import "./components/base/base.scss";
import "./components/card-overview/card-overview.scss";
import "./components/content/content.scss";
import "./components/intro/intro.scss";
import "./components/search/search.scss";
import "./components/sidebar/sidebar.scss";

class App extends Component {

  render() {
    return (
      <div className="App">
        <section className="main">
          <div className="container">
            <div className="col first-col">
              <Sidebar />
            </div>
            <div className="col second-col">
              <Content></Content>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
