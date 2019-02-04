import React, { Component } from 'react';
import Image from '../../img/cloud.png'; 

class CardOverview extends Component {
  render() {
    return (
      <div>
        <section className="card-overview">     
          <h3>Card Overview</h3>
          <img src={Image} alt="image"/>
          <h5>Character Name</h5>
        </section>
      </div>
    )
  }
}

export default CardOverview;