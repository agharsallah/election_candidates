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

  changeLanguage(value) {
    //console.log(value);
    this.setState({ value })
    counterpart.setLocale(value);
  };
  render() {
    const home = <Translate type="text" content="navbar.home" />//home
    const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about Us
    const ngoInfo = <Translate type="text" content="navbar.ngoInfo" />//nGO Info
    const ngoStat = <Translate type="text" content="navbar.ngoStat" />//nGO Stat
    const ngoList = <Translate type="text" content="navbar.ngoList" />//nGO List
    const ngoRegistration = <Translate type="text" content="navbar.ngoRegistration" />//nGO Registration
    const whyRegister = <Translate type="text" content="navbar.whyRegister" />//why Register
    const guideline = <Translate type="text" content="navbar.guideline" />//guideline
    const register = <Translate type="text" content="navbar.register" />//register
    const addExistant = <Translate type="text" content="navbar.addExistant" />//register
    const login = <Translate type="text" content="navbar.login" />//login
    const TunNGO = <Translate type="text" content="navbar.TunNGO" />//Association tunisienne
    const AbroadNGO = <Translate type="text" content="navbar.AbroadNGO" />//exterior association
    const NetworkNGO = <Translate type="text" content="navbar.NetworkNGO" />//reseau association
    const nGOLaw = <Translate type="text" content="navbar.nGOLaw" />//nGOLaw
    const contact = <Translate type="text" content="navbar.contact" />//contact
    const language = <Translate type="text" content="navbar.language" />//language
    const Title = <Translate type="text" content="navbar.Title" />//Platform des
    const Title2 = <Translate type="text" content="navbar.Title2" />//association
    
    const Info = <Translate type="text" content="navbar.nInfo" />//Info
    const Training = <Translate type="text" content="navbar.nTraining" />//Formation
    const Funding = <Translate type="text" content="navbar.nFunding" />//Financement

    return (
      <header className="header-frontend">
      <div className="bloc_gris">
      <div className="bloc_gris_in">
       <div className="rep_tun"><span className="repub">République Tunisienne</span><span className="ministere">Ministère xxxxxxxxxxxxxxxxx | Departement xxxxxxxxxxx</span></div>

      <div className="clear"><img src="static/image/gif/px.gif" alt=""/></div>
      </div>
     </div>
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="fa fa-bars"></span>
              </button>
              <Link className="navbar-brand" to="/" style={{marginRight: '1vh'}} >  {counterpart.translate('navbar.Title')} <span > {Title2}</span></Link>
            </div>
            <div className="navbar-collapse collapse ">
              <ul className="nav navbar-nav"  >
                <li className={this.props.home}><Link to="/">{home}</Link></li>
                {/* <li className={this.props.about}><Link to="/about">{aboutUs}</Link></li> */}

                <li className={this.props.espaceInfo}><Link to="/espace-info">{Info}</Link></li>
                <li className={this.props.espaceTraining}><Link to="/espace-training">{Training}</Link></li>
                <li className={this.props.espaceFunding}><Link to="/espace-funding">{Funding}</Link></li>
                {/* <li className="dropdown " className={this.props.ngoInfo}>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false">{ngoInfo} <b className=" fa fa-angle-down"></b></a>
                  <ul className="dropdown-menu">
                    <li className={this.props.ngoList}><Link to="/ngo-list">{ngoList}</Link></li>
                    <li className={this.props.ngoStat}><Link to="/ngo-stat">{ngoStat}</Link></li>
                    <li className={this.props.ngoLaw}><Link to="/ngo-law">{nGOLaw}</Link></li>
                  </ul>
                </li> */}

                <li className="dropdown-submenu " className={this.props.ngoRegistration}>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false">{ngoRegistration} <b className=" fa fa-angle-down"></b></a>
                  <ul className="dropdown-menu">
                    <li className={this.props.whyRegister}><Link to="/why-register">{whyRegister}</Link></li>
                    <li className={this.props.guideline}><Link to="/guideline">{guideline}</Link></li>
                    <li className="dropdown-submenu">
                      <a tabIndex="-1" href="#">{register} <b className=" fa fa-angle-right"></b></a>
                      <ul className="dropdown-menu">
                        <li className={this.props.TunNGO}><Link to="/register">{TunNGO}</Link></li>
                        <li className={this.props.AbroadNGO}><Link to="/register">{AbroadNGO}</Link></li>
                        <li className={this.props.NetworkNGO}><Link to="/register">{NetworkNGO}</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a tabIndex="-1" href="#">{addExistant} <b className=" fa fa-angle-right"></b></a>
                      <ul className="dropdown-menu">
                        <li className={this.props.TunNGO}><Link to="/register">{TunNGO}</Link></li>
                        <li className={this.props.AbroadNGO}><Link to="/register">{AbroadNGO}</Link></li>
                        <li className={this.props.NetworkNGO}><Link to="/register">{NetworkNGO}</Link></li>
                      </ul>
                    </li>


                  </ul>
                </li>
                {/* <li className={this.props.contact}><Link to="/contact">{contact}</Link></li>*/}

                <li className="dropdown ">
                  <Link to="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false">
                    <span className="username">{language} </span> <b className=" fa fa-angle-down"></b>
                  </Link>
                  <ul className="dropdown-menu">
                    <MenuItem onSelect={this.changeLanguage.bind(this)} eventKey="ar" > <img alt="" width='16px' height='16px' src="/img/flags/tn.png" /> &nbsp; Arabic</MenuItem>
                    <MenuItem onSelect={this.changeLanguage.bind(this)} eventKey="en"> <img alt="" src="/img/flags/us.png" /> &nbsp; English</MenuItem>
                    <MenuItem onSelect={this.changeLanguage.bind(this)} eventKey="fr"> <img alt="" src="/img/flags/fr.png" /> &nbsp; French</MenuItem>
                  </ul>
                </li>

              </ul>

              <div className="navbar-collapse collapse ">
                <ul className="nav navbar-nav navbar-right">
                <li className={this.props.login}><Link to="/login">{login}</Link></li>

                  {/* <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Login <b className=" fa fa-angle-down"></b></a>
                    <ul id="login-dp" className="dropdown-menu">
                      <li>
                        <div className="row">
                          <div className="col-md-12">
                            Login
                     <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                              <div className="form-group">
                                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                              </div>
                              <div className="form-group">
                                <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                              </div>
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" /> keep me logged-in
                           </label>
                              </div>
                            </form>
                          </div>
                          <div className="bottom text-center">
                            New here ? <a href="#"><b>Register</b></a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </header>
    );
  }
}
