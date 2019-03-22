import React, { Component } from "react";

// Components
import CardOverview from "../card-overview/card-overview";

// Images
import cloudImage from "../../img/cloud.png";
import aerithImage from "../../img/aerith.png";
import tifaImage from "../../img/tifa.png";
import barrettImage from "../../img/barrett.png";
import redImage from "../../img/red.png";
import cidImage from "../../img/cid.png";
import sephirothImage from "../../img/sephiroth.png";
import yuffieImage from "../../img/yuffie.png";
import caitImage from "../../img/cait-sith.png";
import vincentImage from "../../img/vincent.png";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <section className="sidebar">
          <CardOverview
            image={cloudImage}
            name="Cloud Strife"
            // onClick, we pass down the 'onClick' that we set in App.js > Sidebar - and set the ID to 1 (because Cloud's ID is 1). And we do the same for the components below.
            onClick={() => this.props.onClick(1)}
          />
          <CardOverview
            image={aerithImage}
            name="Aerith Gainsborough"
            onClick={() => this.props.onClick(2)}
          />
          <CardOverview
            image={tifaImage}
            name="Tifa Lockheart"
            onClick={() => this.props.onClick(3)}
          />
          <CardOverview
            image={barrettImage}
            name="Barrett Wallace"
            onClick={() => this.props.onClick(4)}
          />
          <CardOverview
            image={redImage}
            name="Red XIII"
            onClick={() => this.props.onClick(5)}
          />
          <CardOverview
            image={cidImage}
            name="Cid Highwind"
            onClick={() => this.props.onClick(6)}
          />
          <CardOverview
            image={sephirothImage}
            name="Sephiroth"
            onClick={() => this.props.onClick(7)}
          />
          <CardOverview
            image={yuffieImage}
            name="Yuffie Kisaragi"
            onClick={() => this.props.onClick(8)}
          />
          <CardOverview
            image={caitImage}
            name="Cait Sith"
            onClick={() => this.props.onClick(9)}
          />
          <CardOverview
            image={vincentImage}
            name="Vincent Valentine"
            onClick={() => this.props.onClick(10)}
          />
        </section>
      </div>
    );
  }
}

export default Sidebar;
