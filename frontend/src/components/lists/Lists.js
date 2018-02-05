import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../Navbar';

export default class Lists extends Component {
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div>
      <Navbar home='' stat='active' about='' />
       <h1>Lists</h1>
      </div>
    );
  }
}
