import React, { Component } from 'react';

// Components
import Search from '../search/search';
import CardOverview from '../card-overview/card-overview';

// Images
import cloudImage from '../../img/cloud.png';
import aerithImage from '../../img/aerith.png';
import tifaImage from '../../img/tifa.png';
import barrettImage from '../../img/barrett.png';
import redImage from '../../img/red.png';
import cidImage from '../../img/cid.png';
import sephirothImage from '../../img/sephiroth.png';
import yuffieImage from '../../img/yuffie.png';
import caitImage from '../../img/cait-sith.png';
import vincentImage from '../../img/vincent.png';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <section className="sidebar">     
          <Search placeholder="Type in a character's name..."></Search>
          <CardOverview image={cloudImage} name="Cloud Strife"></CardOverview>
          <CardOverview image={aerithImage} name="Aerith Gainsborough"></CardOverview>
          <CardOverview image={tifaImage} name="Tifa Lockheart"></CardOverview>
          <CardOverview image={barrettImage} name="Barrett Wallace"></CardOverview>
          <CardOverview image={redImage} name="Red XIII"></CardOverview>
          <CardOverview image={cidImage} name="Cid Highwind"></CardOverview>
          <CardOverview image={sephirothImage} name="Sephiroth"></CardOverview>
          <CardOverview image={yuffieImage} name="Yuffie Kisaragi"></CardOverview>
          <CardOverview image={caitImage} name="Cait Sith"></CardOverview>
          <CardOverview image={vincentImage} name="Vincent Valentine"></CardOverview>
        </section>
      </div>
    )
  }
}

export default Sidebar;