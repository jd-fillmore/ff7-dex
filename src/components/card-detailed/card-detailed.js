import React, { Component } from "react";
import Container from "../container/container";
import Column from "../column/column";

import "../card-detailed/card-detailed.scss";

class CardDetailed extends Component {
  render() {
    // Grab the 'characters' object and the 'selected' value State from App.js, and assign it to 'this.props'
    const { characters, selected } = this.props;

    // Filter the chracters and return only whose 'id' belongs to that one specifically
    const filteredCharacters = characters
      .filter(character => character.id === selected)
      .map(character => (
        <section className="card-detailed" key={character.id}>
          <Container>
            <Column id="first">
              <img src={character.Image} alt={character.id} />
              <h2 id="name">{character.Name}</h2>
              <p id="job">
                <em>{character.Job}</em>
              </p>
            </Column>
            <Column>
              <p>
                <span>Age:</span> {character.Age}
              </p>
              <p>
                <span>Weapon:</span> {character.Weapon}
              </p>
              <p>
                <span>Height:</span> {character.Height}
              </p>
              <p>
                <span>Birthdate:</span> {character.Birthdate}
              </p>
              <p>
                <span>Bloodtype:</span> {character.Bloodtype}
              </p>
              <p>{character.Description}</p>
            </Column>
          </Container>
        </section>
      ));

    return <div>{filteredCharacters}</div>;
  }
}

export default CardDetailed;
