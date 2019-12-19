import React, { Component } from "react";
import Container from "../container/container";
import Column from "../column/column";

class CardOverview extends Component {
  render() {
    return (
      <div>
        {/* Here, we finally use the function we passed all the way down the road */}
        <section className="card-overview" onClick={this.props.onClick}>
          <Container>
            <Column>
              <img src={this.props.image} alt={this.props.name} />
            </Column>
            <Column>
              <p>{this.props.name}</p>
            </Column>
          </Container>
        </section>
      </div>
    );
  }
}

export default CardOverview;
