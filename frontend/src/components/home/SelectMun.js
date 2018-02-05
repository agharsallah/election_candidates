import React, { Component } from 'react';
import MunList from './JsonforList/MunList';
import { Redirect, withRouter, Link, NavLink, Route } from 'react-router-dom';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class SelectMun extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false
        }
      }
    handleMunName(selectedOption) {
        let url = '/lists/' + selectedOption.value + "/";
        this.setState({ munName: selectedOption.value,url,redirect: true });
      }
    render() {
        var grades = this.props.grades;
        let url = this.state.url
        return (
            this.state.redirect ? <Redirect push to={url} /> :
            <div >
                <Select
                    name="form-field-name"
                    value={this.state.munName}
                    onChange={this.handleMunName.bind(this)}
                    options={MunList}
                    placeholder='Pick a municipality from the list'
                />
            </div>
        );
    }
}