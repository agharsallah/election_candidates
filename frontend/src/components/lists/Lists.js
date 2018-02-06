import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../Navbar';
import SideBar from './SideBar';
import Card from './Card';
export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = { munName: '' }
  }

  componentWillMount() {
    var munName = ((this.props.location.pathname).substring(7)).slice(0, -1)
    this.setState({ munName });
  }

  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div>

        <div id="smartposition"></div>
        <Navbar home='' stat='' about='' CmgFromList={this.state.munName} />
        <div className="blog blog-2">
          <div className="container">
            <div className="row">
              <SideBar />
              <div class="blog-container col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="row">
                <Card hashtagColor='#09729e' listType='Party ' />
                <Card hashtagColor='#2491d0' listType='Coalition' />
                <Card hashtagColor='#09729e' listType='Party ' />
                <Card hashtagColor='#00acdb' listType='Independent' />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
