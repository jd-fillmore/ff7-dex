import React, { Component } from 'react';
import Intro from '../intro/intro';

class Content extends Component {
  render() {
    return (
      <div>
        <section className="content">  
          <h1>Content</h1>
          <Intro></Intro>
        </section>
      </div>
    )
  }
}

export default Content;