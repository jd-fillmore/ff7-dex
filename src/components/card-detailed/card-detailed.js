import React, { Component } from 'react';
import Container from '../container/container';
import Column from '../column/column';

class CardDetailed extends Component {
  render() {
    return (
      <div>
        <section className="card-overview">
          <Container>
            <Column>
              <h1>card detailed</h1>
            </Column>
          </Container>
        </section>
      </div>
    )
  }
}

export default CardDetailed;