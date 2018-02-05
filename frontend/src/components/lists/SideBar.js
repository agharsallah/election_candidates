import React, { Component } from 'react';
import Translate from 'react-translate-component';

export default class SideBar extends Component {

  
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div className="right-bar col-lg-3 col-md-3 col-sm-3 col-xs-12">
      <div className="search">
        <input type="text" name="search" id="search" placeholder="Search.." />
        <button><i className="fa fa-search"></i></button>
      </div>
      <div className="right-bar-categories">
        <h3 className="right-bar-title"><i className="fa fa-folder-open"></i> CATEGORIES</h3>
        <ul>
          <li><a href="#">Oral exams</a></li>
          <li><a href="#">Teeth whitening</a></li>
          <li><a href="#">Teeth cleaning</a></li>
          <li><a href="#">X-rays</a></li>
          <li><a href="#">Crowns</a></li>
          <li><a href="#">Fillings and bridges</a></li>
          <li><a href="#">Implants</a></li>
          <li><a href="#">Extractions</a></li>
          <li><a href="#">Root canals</a></li>
          <li><a href="#">Surgical implant placements</a></li>
        </ul>
      </div>
      <div className="right-bar-archive">
        <h3 className="right-bar-title"><i className="fa fa-calendar-o"></i> archive</h3>
        <ul>
          <li><a href="#">February 2016
            <span className="right-bar-archive-tag">43</span>
            </a></li>
          <li><a href="#">Janyary 2016
            <span className="right-bar-archive-tag">64</span>
            </a></li>
          <li><a href="#">December 2015
            <span className="right-bar-archive-tag">23</span>
            </a></li>
          <li><a href="#">November 2015
            <span className="right-bar-archive-tag">66</span>
            </a></li>
          <li><a href="#">October 2016
            <span className="right-bar-archive-tag">13</span>
            </a></li>
        </ul>
      </div>
      <div className="right-bar-calendar">
        <input type="text" id="calendar" name="calendar" />
      </div>
      <div className="right-bar-tags">
        <h3 className="right-bar-title"><i className="fa fa-tags"></i> tags</h3>
        <a href="#" className="right-bar-tags-item">Dental</a> <a href="#" className="right-bar-tags-item">Doctor</a> <a href="#" className="right-bar-tags-item">Healt</a> <a href="#" className="right-bar-tags-item">Tooth whitening</a> <a href="#" className="right-bar-tags-item">Restoration</a> <a href="#" className="right-bar-tags-item">Tooth</a> <a href="#" className="right-bar-tags-item">Oral exams</a> <a href="#" className="right-bar-tags-item">Fillings and bridges</a> </div>
    </div>
    );
  }
}
