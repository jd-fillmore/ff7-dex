import React, { Component } from 'react';
import Search from '../search/search';
import CardOverview from '../card-overview/card-overview';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <section className="sidebar">     
          <Search></Search>
          <CardOverview></CardOverview>
          <CardOverview></CardOverview>
          <CardOverview></CardOverview>
          <CardOverview></CardOverview>
          <CardOverview></CardOverview>
          <CardOverview></CardOverview>
          <CardOverview></CardOverview>
          <CardOverview></CardOverview>
        </section>
      </div>
    )
  }
}

export default Sidebar;