import React, { Component } from "react";
import logo from "../../img/logo.jpg";

class Intro extends Component {
  
  render() {
    return (
      <div>
        <section className="intro">
          <img src={logo} alt="FF7 Meteor" />
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
        </section>
      </div>
    );
  }
}

export default Intro;
