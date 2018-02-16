import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Navbar from '../Navbar';
import SideBar from './SideBar';
import Card from './Card';
import axios from 'axios' ;
import config from '../../config' ;
import fuzzy from 'fuzzy';

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = { munName: '',lists:[],modifiedList:[] }
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
        this.setState({lists:response.data,modifiedList:response.data});
    }
    )
    .catch(function (error) {
        console.log(error);
    });
  }
  handleSearchedText(searched){
    //console.log(searched);
    var lists = this.state.lists;
    this.fuzzy_func(searched, lists, 'listName')
  }
  fuzzy_func(input, lists, param) {

    var options = { extract: function (el) { return el[param]; } };
    var results = fuzzy.filter(input, lists, options);
    console.log(results);
    var res = []
    results.map((item) => { res.push(item.original) 
    console.log(item);
    })
    this.setState({ modifiedList: res });
}
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    var renderedLists=[];
    this.state.modifiedList.length<this.state.lists.length?renderedLists=this.state.modifiedList:renderedLists=this.state.lists;
    console.log('sssssssssssssss',renderedLists);
    return (
      <div>

        <div id="smartposition"></div>
        <Navbar home='' stat='' about='' activeList='active' CmgFromList={this.state.munName} />
        <div className="blog blog-2">
          <div className="container">
            <div className="row">
              <SideBar getSearchedText={this.handleSearchedText.bind(this)} />

              <div className="blog-container col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div className="row">
                {(renderedLists).map(function(object,i){
                  console.log(object);
                  let hashColor;
                  object.listType=='party'?hashColor='#09729e':(object.listType=='independent'?hashColor='#00acdb':hashColor='#2491d0')
                  return <Card key={i} hashtagColor={hashColor} listType={object.listType} listName={object.listName}  />
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
