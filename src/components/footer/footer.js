import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <p>{this.props.text}</p>
        </footer>
      </div>
    )
  }
}

export default Footer;