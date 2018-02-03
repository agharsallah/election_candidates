import React, { Component } from 'react';
import Translate from 'react-translate-component';

export default class Footer extends Component {

  render() {
    //const language = <Translate type="text" content="navbar.language" />//language

    return (
      <div className="footer-">
        <div className="wrap">
          <p>
            <a href="">Service Agreement</a>
              |
               <a href="">Privacy Policy</a>
               |
               <a href="">Open Data</a>
          </p>
          <p>Copyright © 2018 DI. All Rights reserved.</p>
          <p>Email : <a href="javascript:;">xxxxxx@xxxxx.com</a></p>
        </div>
      </div>
    );
  }
}
