import React, { Component } from 'react';
import Image from '../../img/cloud.png';
import Container from '../container/container';
import Column from '../column/column';

class CardOverview extends Component {
  render() {
    return (
      <div>
        <section className="card-overview">
          <Container>
            <Column>
              <img src={Image} alt="image"/>
            </Column>
            <Column>
              <p>Character Name</p>
            </Column>
          </Container>
        </section>
      </div>
    )
  }
}

export default CardOverview;