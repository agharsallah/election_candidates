import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../Navbar';
import SideBar from './SideBar';
import Card from './Card';
import axios from 'axios' ;
import config from '../../config' ;

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = { munName: '',lists: [] }
  }

  componentWillMount() {
    let linkToTreat = this.props.location.pathname;
    var patt =/lists\/(.*)\//g
    var res = patt.exec(linkToTreat);
    var munName = res[1]
    //var munName = ((this.props.location.pathname).substring(7)).slice(0, -1)
    this.setState({ munName });
    console.log(munName);
    let qString=config.apiUrl+"/api/get_mun_list";
    axios({
        method: 'get',
        url: qString,
        params: {
          mun_name: munName
        },
    })
    .then(response=>{
        console.log(response.data);
        this.setState({lists:response.data});
    }
    )
    .catch(function (error) {
        console.log(error);
    });
  }

  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    
    return (
      <div>

        <div id="smartposition"></div>
        <Navbar home='' stat='' about='' activeList='active' CmgFromList={this.state.munName} />
        <div className="blog blog-2">
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="blog-container col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div className="row">
                {(this.state.lists).map(function(object,i){
                  console.log(object);
                  let hashColor;let obj=object._id
                  obj.listType=='party'?hashColor='#09729e':(obj.listType=='independent'?hashColor='#00acdb':hashColor='#2491d0')
                  return <Card key={i} hashtagColor={hashColor} listType='Party ' listName='List Name a'  />
                })}
                
              
               {/*  <Card hashtagColor='#09729e' listType='Party ' listName='List Name a'  />
                <Card hashtagColor='#2491d0' listType='Coalition' listName='List Name b' />
                <Card hashtagColor='#09729e' listType='Party ' listName='List Name c' />
                <Card hashtagColor='#00acdb' listType='Independent' listName='List Name d' /> */}

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
