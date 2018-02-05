import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../Navbar';
import MunMap from './MunMap';
import SelectMun from './SelectMun';
import './home.css'
export default class Home extends Component {
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div>
        <div id="smartposition"></div>
        <Navbar home='active' stat='' about='' />

        <div className="doctors">
          <div className="container">
            <div className="row">
              <h2 className="section-title">Choose
                <span className="bold700"> Municipality</span>
              </h2>
              <p className="section-subtitle">Pick the municipality, where you want to check the election's candidates list. <br />
                You can click the shape of the map or use the select menu.
              </p>
            </div>
            <div className="about">
              <div className="row">

                <div className="col-lg-4 col-md-8 col-sm-4 col-xs-12 blog-grid-item mb-10 latest-news-card " style={{zIndex:'5000',paddingBottom:'15px'}} >
                  <article style={{ marginTop: '20vh' }} >
                    <SelectMun />
                  </article>

                </div>
                <MunMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
