import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
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
        var formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);
        formDate.append('device_token', 'ios');
        formDate.append('version', '10.3.2');
        console.log(email);
        console.log(password);
        fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: responseJson });
            });
    };
};