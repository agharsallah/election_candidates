import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import './nav.css'
export default class App extends Component {
  componentWillMount() {
    counterpart.getLocale();
  }
  constructor(props) {
    super(props);
    this.state = { float: 'right' }
  }

  changeLanguage(value) {
    //console.log(value);
    this.setState({ value })
    counterpart.setLocale(value);
  };

  handleResponsive() {
    this.setState({float:'left'});

    if ($('#top-menu .navbar-nav').css('display') == 'none') {
      $('#top-menu .navbar-nav').slideDown();
      $(this).html('<i class="fa fa-close"></i>');
    } else {
      $('#top-menu .navbar-nav').slideUp();
      $(this).html('<i class="fa fa-bars"></i>');
      this.setState({float:'right'});

    }
  }

  render() {
    const home = <Translate type="text" content="navbar.home" />//home
    const stat = <Translate type="text" content="navbar.stat" />//stat
    const about = <Translate type="text" content="navbar.about" />//about
    const language = <Translate type="text" content="navbar.language" />//language
    const ar = <Translate type="text" content="navbar.ar" />//arabe
    const fr = <Translate type="text" content="navbar.fr" />//francais
    const en = <Translate type="text" content="navbar.en" />//english

    return (

      <div className="top-menu" id="top-menu" style={{zIndex:'5000'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="mobile-bar-cont">

                <div className="mobile-bar">
                  <div className="show-menu" id="show-menu" onClick={this.handleResponsive.bind(this)}> <i className="fa fa-bars"></i> </div>
                </div>
              </div>
              <ul className="nav navbar-nav fullWidth">
                <li className={this.props.home}><Link to="/">{home}</Link></li>
                <li className={this.props.stat}><Link to="/stat">{stat}</Link></li>
                <li className={this.props.about}><Link to="/about">{about}</Link></li>

                <li className="dropdown" style={{ float: this.state.float }}> <a data-toggle="dropdown" href="#">{language}</a>
                  <ul className="dropdown-menu" role="menu">
                    <MenuItem onSelect={this.changeLanguage.bind(this)} eventKey="ar" > <img alt="" width='16px' height='16px' src="/images/flags/tn.png" /> &nbsp; {ar}</MenuItem>
                    <MenuItem onSelect={this.changeLanguage.bind(this)} eventKey="en"> <img alt="" src="/images/flags/us.png" /> &nbsp; {en}</MenuItem>
                    <MenuItem onSelect={this.changeLanguage.bind(this)} eventKey="fr"> <img alt="" src="/images/flags/fr.png" /> &nbsp; {fr}</MenuItem>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>


    );
  }
}
