import React, { Component } from 'react';
import Translate from 'react-translate-component';
import config from '../../config';
import axios from 'axios';
import MapKey from './MapKey';
import Control from 'react-leaflet-control';
import ReactLoading from 'react-loading';
import { Redirect, withRouter, Link, NavLink, Route } from 'react-router-dom';
import { Map, Popup, TileLayer, GeoJSON, FeatureGroup, Tooltip, LayersControl, Marker, CircleMarker } from 'react-leaflet';

export default class MunMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false, stateFilter: "All", shapeIsLoaded: false,
      munNumber: "350", munRectangle: "Municipality", munShape: config.initShape, shape: config.initShape
    }
  }
  componentWillMount() {
    let qString2 = config.mapUrl + "/api/reg/MunShapeOld";
    axios({
      method: 'get',
      url: qString2,
      headers: {
        'name': 'Isie',
        'password': 'Isie@ndDi'
      }
    })
      .then(response => {
        //console.log(response.data.data)
        console.log('we got shape data frm db');
        console.log(response);
        this.setState({ munShape: JSON.parse(response.data.data), keyMun: "mun", shapeIsLoaded: true });
      }
      )
      .catch(function (error) {
        console.log(error);
      });

    let qString = config.mapUrl + '/api/reg/all';
    axios({
      method: 'get',
      url: qString,
      headers: {
        'name': 'Isie',
        'password': 'Isie@ndDi'
      }
    })
      .then(response => {
        this.setState({
          shape: JSON.parse(response.data.data), key: 'gov'
        });
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  styleCirc(feature) {
    return {
      fillColor: 'white',
    };
  }
  style(feature) {
    //check for what we have checked as filter subject : Population || state ||
    const etat = this.state.stateFilter;
    if (etat == "All") {
      if (feature.properties.state == "extended") {
        var ETAT = 1;
      } else if (feature.properties.state == "new") {
        var ETAT = 2;
      } else {
        var ETAT = 3;
      }
    }
    if ((feature.properties.state == "extended") && (etat == "Extended")) {
      var ETAT = 1;
    } else if ((feature.properties.state == "new") && (etat == "New")) {
      var ETAT = 2;
    } else if ((feature.properties.state == "old") && (etat == "Old")) {
      var ETAT = 3;
    }

    return {
      fillColor: this.getColor(ETAT, ["#BBDEFB", "#005288", "#0096d6"]),
      color: 'black',
      weight: 1,
      fillOpacity: 0.5
    };

  }
  getColor(d, c1) {
    if (d > 2) { return (c1[2]); }
    else if (d > 1) { return (c1[1]); }
    else if (isNaN(d)) { return ('white') }
    else { return (c1[0]); }
  }
  clickedShape(e) {
    //for the histogram age BarChart
    let property = e.target.feature.properties;
    let url = '/lists/' + property.NAME_EN + "/";
    //window.location =url;
    this.setState({ redirect: true, url: url })
  }
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    const position = [34.8, 10];
    let url = this.state.url;
    return (
      this.state.redirect ? <Redirect push to={url} /> :

        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 blog-grid-item mb-10 latest-news-card ">
          {/* <h5 className="section-title" style={{ textAlign: 'center', fontSize: '30px' }} >Administrative structure</h5> */}

          <article className="card">

            {this.state.shapeIsLoaded ?
              <Map center={position} zoom={7} maxZoom={8} minZoom={7} style={{ height: '100vh', position: 'relative', backgroundColor: 'white' }}>
                <GeoJSON
                  data={this.state.shape}
                  style={this.styleCirc.bind(this)}
                />
                <GeoJSON
                  key={"a" + this.state.keyMun}
                  data={this.state.munShape}
                  style={this.style.bind(this)}
                  onEachFeature={
                    (feature, layer) => {
                      layer.bindTooltip(feature.properties.NAME_EN, { permanent: false, className: 'tooltipnamear', direction: 'right' })
                      layer.on({ click: this.clickedShape.bind(this) });
                    }
                  }
                />

                <Control position="bottomright" >
                  <MapKey colorSet={["#BBDEFB", "#005288", "#0096d6"]} grades={["New", "Old", "Extended"]} keyTitle="Municipality state" />
                </Control>

                <div className="color-box blue-grad col-sm-2" style={{ padding: "40px 40px", float: "right" }}>
                  <h2 style={{ textAlign: "center" }}><span className="timer" >{this.state.munNumber}</span></h2>
                  <span className="count-desc" style={{ textAlign: "center" }}>{this.state.munRectangle}</span>
                </div>
              </Map>
              :
              <div>
                <div className="col-md-5"></div>
                <div className="col-md-5" style={{ marginTop: "43vh" }}>
                  <h2 >"Loading Map"</h2>
                  <div style={{ marginLeft: "70px" }}>
                    <ReactLoading type="bars" color="#444" className="react-Loader" delay={0} />
                  </div>
                </div>
              </div>
            }
          </article>{/* /.card */}
        </div>
    );
  }
}
