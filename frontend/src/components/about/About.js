import React, { Component } from 'react';
import Translate    from 'react-translate-component';
import Navbar from '../Navbar';
import UnderConstruction from '../stat/UnderConstruction' ;

export default class About extends Component {
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div>
      <div id="smartposition"></div>
      <Navbar home='' stat='' about='active' />
      <UnderConstruction/>

      </div>
    );
  }
}
