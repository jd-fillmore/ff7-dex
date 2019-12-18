import React, { Component } from "react";

// Components
import Content from "./components/content/content";
import Sidebar from "./components/sidebar/sidebar";
import Container from "./components/container/container";
import Column from "./components/column/column";

// Styles
import "./components/base/base.scss";
import "./components/container/container.scss";
import "./components/column/column.scss";
import "./components/card-overview/card-overview.scss";
import "./components/content/content.scss";
import "./components/intro/intro.scss";
import "./components/search/search.scss";
import "./components/sidebar/sidebar.scss";

class App extends Component {
  // Set the state of 'null' - meaning, on window load, don't pull in any character data on the intro screen
  state = {
    selected: null
  };

  onCharacterClick = id => {
    this.setState({ selected: id });
  };

  render() {
    return (
      <div className="App">
        <section className="main">
          <Container>
            <Column className="first-col">
              {/* Pass the currently selected item into the content, where it's needed */}
              <Content selected={this.state.selected}></Content>
              {/* Pass the onClick method into the Sidebar, cause that's where it's happening */}
              <Sidebar onClick={this.onCharacterClick} />
            </Column>
          </Container>
        </section>
      </div>
    );
  }
}

export default App;
