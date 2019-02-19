import React, { Component } from "react";

class Intro extends Component {
  
  render() {
    return (
      <div>
        <section className="intro">
          <img src={this.props.logo} alt="FF7 Meteor" />
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
        </section>
      </div>
    );
  }
}

export default Intro;
