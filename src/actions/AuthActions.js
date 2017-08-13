import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import axios from 'axios';

export const emailChanged = (text) => {
    console.log('gh method1')
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    console.log('gh method2')
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};


export const LoginUser = ({ email, password }) => {
    console.log('gh method3')
    return (dispatch) => {
        var formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);
        formData.append('device_token','ios');
        formData.append('version','10.3.3');
        console.log(email+'email');
        console.log(password+'password');
        fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: LOGIN_USER_SUCCESS, result: responseJson.result });
            });
    };
};