import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import InputBackground from './InputBackground';

const Input = ({ label, value, onChangeText, placeholder, secure }) => {
    const { containerStyle, inputStyle } = styles;

    return (
        <InputBackground style={containerStyle}>
            <TextInput
                secureTextEntry={secure}
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </InputBackground>
    );

};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        backgroundColor: 'rgba(0,0,0,0)',
    }
};

export { Input };
