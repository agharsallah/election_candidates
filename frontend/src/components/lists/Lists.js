import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../Navbar';

export default class Lists extends Component {
  constructor(props){
    super(props);
    this.state={munName:''}
  }
  
  componentWillMount() {
    var munName=((this.props.location.pathname).substring(7)).slice(0, -1)
    this.setState({munName});
  }
  
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div>
      <Navbar home='' stat='' about='' CmgFromList={this.state.munName} />
      <h1>Lists</h1>
      <h1>Lists</h1>
      <h1>Lists</h1>
      </div>
    );
  }
}
