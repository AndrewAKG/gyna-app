import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

class SignUpAccount extends React.Component {
    render() {
        const { onButtonPress } = this.props;
        const {
            containerStyle,
            TextViewStyle,
            noAccountTextStyle,
            SignUpButtonViewStyle,
            SignUpButtonStyle,
            buttonTextStyle
          } = styles;

        return (
            <View style={containerStyle}>

                <View style={TextViewStyle}>
                    <Text style={noAccountTextStyle}>
                        Don't Have an account ?
                    </Text>
                </View>

                <View style={SignUpButtonViewStyle}>
                    <Button
                        onPress={onButtonPress}
                        title="Sign UP"
                        buttonStyle={SignUpButtonStyle}
                        color='white'
                        fontWeight='600'
                        textStyle={buttonTextStyle}
                    />
                </View>

            </View>
        );
    }
}
const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        margin: 15
    },
    SignUpButtonStyle: {
        borderRadius: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        width: 150,
        height: 100,
    },
    SignUpButtonViewStyle: {
        flex: 2,
        marginLeft: 20,
        marginTop: -30,
        alignItems: "flex-end"
    },
    buttonTextStyle: {
        textDecorationLine: 'underline',
        fontSize: 14,
        marginLeft: 70,
        textAlign: 'left',
        marginTop: -23,
        color: '#4169E1',
        fontWeight: "400"
    },
    noAccountTextStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    TextViewStyle: {
        flex: 8,
        marginLeft: 15,
        backgroundColor: 'rgba(0,0,0,0)',
        alignItems: 'flex-start'
    }

};
export default SignUpAccount;