import React, { Component } from 'react';
import Intro from '../intro/intro';
import CardDetailed from '../card-detailed/card-detailed';

class Content extends Component {
  render() {
    const { characters } = this.props;
    const characterList = characters.map(characters => {
      return (
        <div className="characters">
          <p>Name: {characters.Name}</p>
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
    })
    return (
      <div>
        <section className="content">
          <Intro 
            title="Final Fantasy 7 Character Stats App"
            text="Search and discover the stats for the main characters of the best game ever made.">
          </Intro>
          <CardDetailed/>
          {/* {characterList} */}
        </section>
      </div>
    )
  }
}

export default Content;