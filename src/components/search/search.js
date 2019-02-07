import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <section className="search">     
          <input type="search" placeholder={this.props.placeholder}></input>
        </section>
      </div>
    )
  }
}

export default Search;