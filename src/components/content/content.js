import React, { Component } from 'react';
import Intro from '../intro/intro';

class Content extends Component {
  render() {
    return (
      <div>
        <section className="content">
          <Intro 
            title="Final Fantasy 7 Character Stats App"
            text="Search and discover the stats for the main characters of the best game ever made.">
          </Intro>
        </section>
      </div>
    )
  }
}

export default Content;