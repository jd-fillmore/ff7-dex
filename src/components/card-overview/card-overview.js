import React, { Component } from 'react';
import Container from '../container/container';
import Column from '../column/column';
import CardDetailed from '../card-detailed/card-detailed';

class CardOverview extends Component {
  render() {
    return (
      <div>
        <section className="card-overview" onClick={CardDetailed}>
          <Container>
            <Column>
              <img src={this.props.image} alt="image"/>
            </Column>
            <Column>
              <p>{this.props.name}</p>
            </Column>
          </Container>
        </section>
      </div>
    )
  }
}

export default CardOverview;