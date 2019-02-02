import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero">     
          <h1>(Logo)</h1>
          <p id="subtitle">{this.props.text}</p>
        </section>
      </div>
    )
  }
}

export default Hero;