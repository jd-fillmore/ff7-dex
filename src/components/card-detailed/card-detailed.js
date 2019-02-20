import React, { Component } from "react";
import Container from "../container/container";
import Column from "../column/column";

import "../card-detailed/card-detailed.scss";

class CardDetailed extends Component {
  render() {
    // Grab the 'characters' object and the 'selected' value State from App.js, and assign it to 'this.props'
    const { characters, selected } = this.props;

    // Filter the chracters and return only whose 'id' belongs to that of '6'
    const filteredCharacters = characters
      .filter(character => character.id === selected)
      .map(character => (
        <section className="card-detailed" key={character.id}>
          <Column>
            <h2>{character.Name}</h2>
            <p id="job">
              <em>{character.Job}</em>
            </p>
          </Column>
          <Container>
            <Column>
              <p>Age: {character.Age}</p>
            </Column>
            <Column>
              <p>Weapon: {character.Weapon}</p>
            </Column>
            <Column>
              <p>Height: {character.Height}</p>
            </Column>
            <Column>
              <p>Birthdate: {character.Birthdate}</p>
            </Column>
            <Column>
              <p>Bloodtype: {character.Bloodtype}</p>
            </Column>
          </Container>
          <Column>
            <p>Description: {character.Description}</p>
          </Column>
        </section>
      ));

    return <div>{filteredCharacters}</div>;
  }
}

export default CardDetailed;
