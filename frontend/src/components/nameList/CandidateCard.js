import React, { Component } from 'react';
import Translate from 'react-translate-component';
import { Link } from 'react-router-dom';

export default class CandidateCard extends Component {


  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (

      <div className="twPc-div col-lg-9 col-md-offset-2 col-md-9 col-sm-9 col-xs-12">


        <div>

          <div className="twPc-divUser">
            <div className="twPc-divName">
              <p >{this.props.name}</p>
            </div>

          </div>

          <div className="twPc-divStats row">
            <div className='col-md-2'>
              <span className="twPc-StatLabel twPc-block">Age</span>
              <span className="twPc-StatValue">{this.props.age}</span>
            </div>
            <div className='col-md-3'>
              <span className="twPc-StatLabel twPc-block">Profession</span>
              <span className="twPc-StatValue">{this.props.profession}</span>
            </div>
            <div className='col-md-3'>
              <span className="twPc-StatLabel twPc-block">Gender</span>
              <span className="twPc-StatValue">{this.props.gender}</span>
            </div>
            <div className='col-md-1'>
              <span className="twPc-StatLabel twPc-block">Number</span>
              <span className="twPc-StatValue">{this.props.num}</span>
            </div>
            <div className='col-md-3'>
              <span className="twPc-StatLabel twPc-block">Other</span>
              <span className="twPc-StatValue">{this.props.other}</span>
            </div>

          </div>
        </div>
      </div>

    );
  }
}
