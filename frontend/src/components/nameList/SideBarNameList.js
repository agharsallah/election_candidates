import React, { Component } from 'react';
import Translate from 'react-translate-component';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
const Range = Slider.Range;
export default class SideBarNameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 18,
      max: 100,
    };
  }
  onChange(e) {
    console.log('Checkbox checked:', (e.target));
  }
  sliderChange(res) {
    this.setState({ min: res[0], max: res[1] });
  }
  render() {
    //const aboutUs = <Translate type="text" content="navbar.aboutUs" />//about
    return (
      <div className="right-bar col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div className="search">
          <input type="text" name="search" id="search" placeholder="Search.." />
          <button><i className="fa fa-search"></i></button>
        </div>
        <div className="right-bar-categories">
          <h3 className="right-bar-title"><i className="fa fa-filter"></i> Filter</h3>
          <p className='filterSubtitleFirst'> Special Conditions : </p>

          <div >
            <p>
              <label>
                <Checkbox
                  name="Party"
                  
                />
                &nbsp; Handicaped
            </label>
              &nbsp;&nbsp;
          </p>
            <p>
              <label>
                <Checkbox
                  name="Independent"
                  
                />
                &nbsp; less than 35
            </label>
              &nbsp;&nbsp;
          </p>
           
          </div>
          <p className='filterSubtitle'> Average age in the List : </p>
          <div style={{ paddingBottom: '20px' }} >
            <div>
              <div className='wraperP'><p className='paragL'>Min= {this.state.min}</p> <p className='paragR'>Max= {this.state.max}</p></div>
            </div>

            <Range defaultValue={[18, 100]} min={18} max={100} onChange={this.sliderChange.bind(this)} />
          </div>
          <p className='filterSubtitle'> Gender : </p>

          <div >
            <p>
              <label>
                <Checkbox
                  name="Male"
                  
                  onChange={this.onChange.bind(this)}
                />
                &nbsp; Male
          </label>
              &nbsp;&nbsp;
        </p>
            <p>
              <label>
                <Checkbox
                  name="Female"
                  
                  onChange={this.onChange.bind(this)}
                />
                &nbsp; Female
          </label>
              &nbsp;&nbsp;
        </p>

          </div>
        </div>
      </div>
    );
  }
}
