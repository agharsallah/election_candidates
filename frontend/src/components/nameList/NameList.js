import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../Navbar';
import SideBarNameList from './SideBarNameList';
import Card from './Card';
import './nameList.css'

export default class NameList extends Component {
  constructor(props) {
    super(props);
    this.state = { munName: '' }
  }

  componentWillMount() {
    let linkToTreat = this.props.location.pathname;
    var listName=linkToTreat.replace(/\/.*\//g, "")
    //Get the munName from /lists/mornag/List Name a
    var patt =/lists\/(.*)\//g
    var res = patt.exec(linkToTreat);
    var munName = res[1]
    this.setState({ munName,listName });
  }

  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div>

        <div id="smartposition"></div>
        <Navbar home='' stat='' about='' activeList='' activeNameList='active' CmgFromList={this.state.munName} CmgFromNameList={this.state.listName} />
        <div className="blog blog-2">
          <div className="container">
            <div className="row">
              <SideBarNameList />
              <div className="blog-container col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div className="row">
                <Card hashtagColor='#09729e' listType='Party ' />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
