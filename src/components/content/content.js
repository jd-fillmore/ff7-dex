import React, { Component } from "react";
import Intro from "../intro/intro";
import Container from "../container/container";
import Column from "../column/column";
import CardDetailed from "../card-detailed/card-detailed";
import logo from "../../img/logo.png";
import cloudSingle from "../../img/cloud-single.png";
import aerithSingle from "../../img/aerith-single.png";

class Content extends Component {
  state = {
    characters: [
      {
        Name: "Cloud Strife",
        id: 1,
        Image: cloudSingle,
        Job: "Mercenary",
        Age: 21,
        Weapon: "Sword",
        Height: `5'7`,
        Birthdate: "August 19",
        Birthplace: "Nibelheim",
        Bloodtype: "AB",
        Description: `The main character in Final Fantasy VII. Originally a member of SOLDIER, he is now a mercenary who will take any job. After being hired by AVALANCHE, he gradually gets caught up in a massive struggle for the life of the planet. His enormous sword can cut almost anything in two.`
      },
      {
        Name: "Aerith Gainsborough",
        id: 2,
        Image: aerithSingle,
        Job: "Flower Merchant",
        Age: 22,
        Weapon: "Rod",
        Height: `5'3`,
        Birthdate: "February 7",
        Birthplace: "Unknown",
        Bloodtype: "O",
        Description:
          "Young, beautiful, and somewhat mysterious. Aeris met Cloud while selling flowers on the streets of Midgar. She decided to join him soon after. Her unusual abilities enable her to use magic, but she seems more interested in deepening the love triangle between herself, Cloud, and Tifa."
      },
      {
        Name: "Tifa Lockheart",
        id: 3,
        Job: "Bar Hostess",
        Age: 20,
        Weapon: "Glove",
        Height: `5'4`,
        Birthdate: "May 3",
        Birthplace: "Nibelheim",
        Bloodtype: "B",
        Description:
          "Bright and optimistic, Tifa always cheers up the others when they're down. But don't let her looks fool you, she can decimate almost any enemy with her  fists. She is one of the main members of of AVALANCHE. She and Cloud were childhood friends, and although she has strong feelings for him, she would never admit it.."
      },
      {
        Name: "Barrett Wallace",
        id: 4,
        Job: "Leader of Avalanche",
        Age: 35,
        Weapon: "Gun-Arm",
        Height: `6'4`,
        Birthdate: "December 15",
        Birthplace: "Corel Village",
        Bloodtype: "O",
        Description:
          "Head of the underground resistance movement, Avalanche, Barret is fighting the mega-conglomerate Shinra, Inc. which has monopolized Mako energy by building special reactors to suck it our of the planet. Barret depends on brute strength and his Gun-Arm to see him through. His wife died in an accident sever years ago, and he know lives with his daughter Marlene."
      },
      {
        Name: "Red XIII",
        id: 5,
        Job: "Beast",
        Age: 48,
        Weapon: "Headdress",
        Height: `3'9`,
        Birthdate: "Unknown",
        Birthplace: "Cosmo Canyon",
        Bloodtype: "Unknown",
        Description:
          "Just as his name implies, he is an animal with fire red fur. But under his fierce exterior is an intelligence surpassing that of any human's. His sharp claws and fangs make him good at close-range fighting, but other than that, not much is known about him. It's not even certain that Red XIII is his real name. A real enigma."
      },
      {
        Name: "Cid HighWind",
        id: 6,
        Job: "Pilot",
        Age: 32,
        Weapon: "Spear",
        Height: `5'8`,
        Birthdate: "February 22",
        Birthplace: "Unknown",
        Bloodtype: "B",
        Description: `Cid is a tough talking, warm hearted old pilot who hasn't forgotten his dreams. There's no better pilot by air or sea. he believes someday he'll fly to the ends of the universe. With his handmade spear and knowledge of machinery, he throws himself into any 
      attack regardless of the danger.`
      },
      {
        Name: "Sephiroth",
        id: 7,
        Job: "Soldier Officer",
        Age: "Unknown",
        Weapon: "Long Sword",
        Height: `6'1`,
        Birthdate: "Unknown",
        Birthplace: "Unknown",
        Bloodtype: "Unknown",
        Description: `Even amongst the elite troops of SOLDIER, Sephiroth is known to be the best. His past is locked away in a confidential file held by Shinra, Inc. His giant sword, which onlyhe can handle, has extremely destructive power. Said to have disappeared in the battle a few years ago, his current whereabouts are unknown.`
      },
      {
        Name: "Yuffie Kisaragi",
        id: 8,
        Job: "Materia Hunter",
        Age: 16,
        Weapon: "Boomerang",
        Height: `5'2`,
        Birthdate: "November 20",
        Birthplace: "Wutai",
        Bloodtype: "A",
        Description: `Although you'd never know it by looking at her, Yuffie comes from a long line of ninja. She forced herself into the group just to get a "certain something". She's sneaky, arrogant, and "way" selfish. But with her super shuriken and her special skills, there isn't anyone else you'd rather have
        fight on your side.`
      },
      {
        Name: "Cait Sith",
        id: 9,
        Job: "Toysaurus",
        Age: "Unknown",
        Weapon: "Megaphone",
        Height: `3'2`,
        Birthdate: "Unknown",
        Birthplace: "Unknown",
        Bloodtype: "Unknown",
        Description: `Cait Sith rides around on the back of a huge stuffed Mog he magically brought to life. Megaphone in hand, he's always shouting orders and creating dopey attacks. When his slot machine attack works, the enemy lines look like an overturned toy box. His hobby is fortunetelling, but like his personality, it's pretty unreliable.`
      },
      {
        Name: "Vincent Valentine",
        id: 10,
        Job: "Professional Vampire",
        Age: 27,
        Weapon: "Gun",
        Height: `6'0`,
        Birthdate: "October 13",
        Birthplace: "Unknown",
        Bloodtype: "A",
        Description: `A mystical man, stern and upright while at the same time dark and mysterious. His past connection with Shinra, Inc. is what made him join Cloudand the others. He may seem frail at first glance, but hidden inside his body lurks a fearsome power.`
      }
    ]
  };

  render() {
    return (
      <div>
        <section className="content">
          <Container>
            <Column>
              <Intro
                title="Final Fantasy 7 Character Stats App"
                text="Choose a character on the left to show their in game stats."
                logo={logo}
                class="logo"
              />
              <CardDetailed
                characters={this.state.characters}
                selected={this.props.selected}
              />
            </Column>
          </Container>
        </section>
      </div>
    );
  }
}

export default Content;
