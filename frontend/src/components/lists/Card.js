import React, { Component } from 'react';
import Translate from 'react-translate-component';

export default class Card extends Component {


  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div className="blog-item">
          <div className="blog-item-image"> <img className="listImage" src="/images/logo.jpg" alt="" />

            <div className="blog-item-info"  >
              <div className="blog-item-date" style={{background:this.props.hashtagColor}} ><i className="fa fa-hashtag"></i> {this.props.listType} </div>
              <div className="blog-item-button" style={{ float: 'right' }}><a href="#" className="btn btn-primary-0">READ MORE</a></div>
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
