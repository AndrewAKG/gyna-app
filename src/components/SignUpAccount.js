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
			SignUpContainer,
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

				<Button
					onPress={onButtonPress}
					title="Sign UP"
					buttonStyle={SignUpButtonStyle}
					color='white'
					fontWeight='normal'
					textStyle={buttonTextStyle}
					containerViewStyle={SignUpContainer}
				/>

			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flexDirection: 'row',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0)',
		margin: 10
	},
	SignUpButtonStyle: {
		borderRadius: 0,
		backgroundColor: 'rgba(0,0,0,0)',
		width: null,
		height: null
	},
	SignUpContainer: {
		flex: 2,
		alignItems: 'stretch'
	},
	buttonTextStyle: {
		fontSize: 14,
		color: '#00C1FF',
		textAlign: 'left',
		fontWeight: 'normal'
	},
	noAccountTextStyle: {
		color: 'white',
		fontSize: 16,
		fontWeight: '400'
	},
	TextViewStyle: {
		flex: 8,
		alignItems: 'flex-start'
	}

};

export default SignUpAccount;