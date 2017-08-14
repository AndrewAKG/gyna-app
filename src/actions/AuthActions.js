import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER
} from './types';
import { Platform } from 'react-native';
//import AuthPersistance from './AuthPersistance';

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

export const LoginUser = ({ email, password, checked }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        var formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);
        if (Platform.OS === 'ios') {
            formData.append('device_token', 'ios');
            formData.append('version', parseInt(Platform.Version, 10));
        }
        else {
            formData.append('device_token', 'android');
            formData.append('version', Platform.Version);
        }

        fetch('http://scope-rubix.com/gyna-backend/public_html/api_auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then((response) => response.json())
            .then((responseJson) => {
                //    AuthPersistance.saveItem('email', email),
                //       AuthPersistance.saveItem('password', password),
                //      AuthPersistance.saveItem('id_token', responseJson.message),
                dispatch({ type: LOGIN_USER_SUCCESS, result: responseJson.message });
            });
    };
};