import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <section className="search">     
          <input type="search" placeholder="Type in a character's name..."></input>
        </section>
      </div>
    )
  }
}

export default Search;