import React, { Component } from 'react';
import Intro from '../intro/intro';

class Content extends Component {
  render() {

    // Grab the 'characters' object from App.js, and assign it to 'this.props'
    const { characters } = this.props;

    // Filter the chracters and return only whose 'id' belongs to that of '6'
    const filteredCharacters = characters.filter(characters => {
      if (characters.id === 6) {
        return (
          <div className="characters" key={characters.id}>
            <p>Name: {characters.Name}</p>
            <p>ID: {characters.id}</p>
            <p>Job: {characters.Job}</p>
            <p>Age: {characters.Age}</p>
            <p>Weapon: {characters.Weapon}</p>
            <p>Height: {characters.Height}</p>
            <p>Birthdate: {characters.Birthdate}</p>
            <p>Birthplace: {characters.Birthplace}</p>
            <p>Bloodtype: {characters.Bloodtype}</p>
            <p>Description: {characters.Description}</p>
          </div>
        )
      }
    });

    // Check to see if it logs properly (it does)
    console.log(filteredCharacters);

    return (
      <div>
        {filteredCharacters}
      </div>
    )
  }
}

export default Content;