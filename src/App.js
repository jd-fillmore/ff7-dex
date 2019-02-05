import React, { Component } from 'react';

// Components
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';

// Styles
import "./components/base/base.scss";
import "./components/card-overview/card-overview.scss";
import "./components/content/content.scss";
import "./components/intro/intro.scss";
import "./components/search/search.scss";
import "./components/sidebar/sidebar.scss";

class App extends Component {

  state = {
    characters: [
      {name: 'Cloud Strife', Job: 'Mercenary', Age: 21, Weapon: 'Sword', Height: `5'7`, Birthdate: 'August 19', Birthplace: 'Nibelheim', Bloodtype: 'AB', Description: `The main character in Final Fantasy VII. Originally a member of SOLDIER, he is now a mercenary who will take any job. After being hired by AVALANCHE, he gradually gets caught up in a massive struggle for the life of the planet. His enormous sword can cut almost anything in two.`},
      {name: 'Aerith Gainsborough', Job: 'Flower Merchant', Age: 22, Weapon: 'Rod', Height: `5'3`, Birthdate: 'February 7', Birthplace: 'Unknown', Bloodtype: 'O', Description: `Young, beautiful, and somewhat mysterious. Aeris met Cloud while selling flowers on the streets of Midgar. She decided to join him soon after. Her unusual abilities enable her to use magic, but she seems more interested in deepening the love triangle between herself, Cloud, and Tifa.`},
      {name: 'Tifa Lockheart', Job: 'Bar Hostess', Age: 20, Weapon: 'Glove', Height: `5'4`, Birthdate: 'May 3', Birthplace: 'Nibelheim', Bloodtype: 'B', Description: `Bright and optimistic, Tifa always cheers up the others when they're down. But don't let her looks fool you, she can decimate almost any enemy with her  fists. She is one of the main members of of AVALANCHE. She and Cloud were childhood friends, and although she has strong feelings for him, she would never admit it..`},
      {name: 'Barrett Wallace', Job: 'Leader of Avalanche', Age: 35, Weapon: 'Gun-Arm', Height: `6'4`, Birthdate: 'December 15', Birthplace: 'Corel Village', Bloodtype: 'O', Description: `Head of the underground resistance movement, Avalanche, Barret is fighting the mega-conglomerate Shinra, Inc. which has monopolized Mako energy by building special reactors to suck it our of the planet. Barret depends on 
      brute strength and his "Gun-Arm" to see him through. His wife died in an accident sever years ago, and he know lives with his daughter Marlene.`},
      {name: 'Red XIII', Job: 'Beast', Age: 48, Weapon: 'Headdress', Height: `3'9`, Birthdate: 'Unknown', Birthplace: 'Cosmo Canyon', Bloodtype: 'Unknown', Description: `Just as his name implies, he is an animal with fire red fur. But under his fierce exterior is an intelligence surpassing that of any human's. His sharp claws and fangs make him good at close-range fighting, but other than that, not much is known about him. It's not even certain that "Red XIII" is his real name. A real enigma.`},
      {name: 'Cid HighWind', Job: 'Pilot', Age: 32, Weapon: 'Spear', Height: `5'8`, Birthdate: 'February 22', Birthplace: 'Unknown', Bloodtype: 'B', Description: `Cid is a tough talking, warm hearted old pilot who hasn't forgotten his dreams. There's no better pilot by air or sea. he believes someday he'll fly to the ends of the universe. With his handmade spear and knowledge of machinery, he throws himself into any 
      attack regardless of the danger.`},
    ]
  }

  render() {
    return (
      <div className="App">
        <section className="main">
          <div className="container">
            <div className="col">
              <Sidebar></Sidebar>
            </div>
            <div className="col">
              <Content></Content>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;