import React, { Component } from "react";
import Container from "../container/container";
import Column from "../column/column";

class CardDetailed extends Component {

  render() {
    // Grab the 'characters' object from App.js, and assign it to 'this.props'
    const { characters } = this.props;

    // Filter the chracters and return only whose 'id' belongs to that of '6'
    const filteredCharacters = characters
      .filter(character => character.id === 4)
      .map(character => (
        <div className="characters" key={character.id}>
          <p>Name: {character.Name}</p>
          <p>Job: {character.Job}</p>
          <p>Age: {character.Age}</p>
          <p>Weapon: {character.Weapon}</p>
          <p>Height: {character.Height}</p>
          <p>Birthdate: {character.Birthdate}</p>
          <p>Birthplace: {character.Birthplace}</p>
          <p>Bloodtype: {character.Bloodtype}</p>
          <p>Description: {character.Description}</p>
        </div>
      ));

    return (
      <div>
        <Container>
          <Column>
            {filteredCharacters}
          </Column>
        </Container>
      </div>
    );
  }
}

export default CardDetailed;
