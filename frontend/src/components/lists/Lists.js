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
    let linkToTreat = this.props.location.pathname;
    var patt =/lists\/(.*)\//g
    var res = patt.exec(linkToTreat);
    var munName = res[1]
    //var munName = ((this.props.location.pathname).substring(7)).slice(0, -1)
    this.setState({ munName });
  }

  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div>

        <div id="smartposition"></div>
        <Navbar home='' stat='' about='' activeList='active' CmgFromList={this.state.munName} />
        <div className="blog blog-2">
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="blog-container col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div className="row">
                <Card hashtagColor='#09729e' listType='Party ' listName='List Name a'  />
                <Card hashtagColor='#2491d0' listType='Coalition' listName='List Name b' />
                <Card hashtagColor='#09729e' listType='Party ' listName='List Name c' />
                <Card hashtagColor='#00acdb' listType='Independent' listName='List Name d' />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
