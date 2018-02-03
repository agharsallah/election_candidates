import axios from 'axios';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import history from '../history';

import {
    AUTH_USER,
    UNAUTH_USER,
    USER_ROLE,
    AUTH_ERROR,
    FETCH_BASIC_CSO_DASHBOARD,
    FETCH_BASIC_ADMIN_DASHBOARD
} from './types';

const ROOT_URL = 'http://localhost:8000/api/users';

/* The Post request to check the credentials could be changed for Admin-for more security- */
export function signinUser({ username, password},redirectLink) {

    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/login`, { username, password })
            .then(response => {
                // If request is good...
                // - Update state to indicate user is authenticated
                //this.props.history.push("/cso/info")
                console.log('Look here', response.data.user);
                dispatch({
                    type: USER_ROLE,
                    payload: response.data.user.type
                });
                dispatch({ type: AUTH_USER });
                // - Save the JWT token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', response.data.user.type);
                // - redirect to the route dashboard of the cso|ifeda|BC ... depends on the redirectLink
                history.push(redirectLink)
            })
            .catch((err) => {
                // If request is bad...
                // - Show an error to the user
                console.log(err);
                dispatch(authError('fausse informations de connexion'));
            });
    }
}

export function registerAdmin({ name, phone,fax,email,username,password,type,adress },redirectLink) {
    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/admin/register`, {name, phone,fax,email,username,password,type,adress} )
            .then(response => {
                console.log(response);
                history.push(redirectLink)
            })
            .catch((err) => {
                // If request is bad...
                // - Show an error to the user
                console.log(err);
                dispatch(authError('fausse informations de connexion'));
            });
    } 
}

export function signinAdmin({ username, password},redirectLink) {

    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/admin/login`, { username, password })
            .then(response => {
                console.log(response);
                dispatch({
                    type: USER_ROLE,
                    payload: response.data.user.type
                });
                dispatch({ type: AUTH_USER });
                // - Save the JWT token
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', response.data.user.type);
                // - redirect to the route dashboard of the cso|ifeda|BC ... depends on the redirectLink
                history.push(redirectLink)
            })
            .catch((err) => {
                // If request is bad...
                // - Show an error to the user
                console.log(err);
                dispatch(authError('fausse informations de connexion'));
            });
    }
}
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    return { type: UNAUTH_USER };
}

export function fetchBasicCsoInfo() {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/cso-dash`, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
                console.log('daaataaa',response.data.user);
                dispatch({
                    type: FETCH_BASIC_CSO_DASHBOARD,
                    payload: response.data.user
                })
            })
            .catch((err) => {
                // If request is bad...
                // - Show an error to the user
                console.log(err);
            });
    }
}

export function fetchBasicAdminInfo() {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/admin-dash`, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(response => {
                console.log('daaataaa',response.data.user);
                dispatch({
                    type: FETCH_BASIC_ADMIN_DASHBOARD,
                    payload: response.data.user
                })
            })
            .catch((err) => {
                // If request is bad...
                // - Show an error to the user
                console.log(err);
            });
    }
}
