import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER
} from './types';
import { NavigationActions } from 'react-navigation';
import axios from 'axios';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};


export const LoginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        var formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);
        formData.append('device_token', 'ios');
        formData.append('version', '10.3.2');

        console.log(email);

        fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: LOGIN_USER_SUCCESS, result: responseJson.message });
               // console.log('navigate ya puppyyy')
                //dispatch(NavigationActions.navigate({ routeName: 'Route' }));
            });
    };
};