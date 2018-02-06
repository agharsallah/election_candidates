import React, { Component } from 'react';
import Translate from 'react-translate-component';
import { Link } from 'react-router-dom';

export default class Card extends Component {


  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div className="blog-item">
          <div className="blog-item-image">  
          <Link  to="#"><img className="listImage" src="/images/logo.jpg" alt="" />  </Link>
            <div className="blog-item-info"  >
              <div className="blog-item-date" style={{background:this.props.hashtagColor}} ><i className="fa fa-hashtag"></i> {this.props.listType} </div>
              {/* <div className="blog-item-button" style={{ float: 'right' }}><a href="#" className="btn btn-primary-0"> MORE</a></div> */}
            </div>

            <div className="blog-item-info1">
              <div className="blog-item-title">
                <h3><a href="#">List Name</a></h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
