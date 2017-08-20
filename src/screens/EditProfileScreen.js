import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { BackgroundImage, InputMoreScreen, BirthdateInput, Spinner } from '../components';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { userData, editUsername, editAddress, editDate, editEmail, editPhone, editProfile } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class EditProfileScreen extends Component {

  static navigationOptions = {
    title: 'editProfile',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTitle: 'edit profile',
  };

  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      date: this.props.date,
      username: this.props.username,
      email: this.props.email,
      mobile: this.props.mobile,
      address: this.props.address,
    }
  }

  componentWillMount() {
    this.props.userData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.username,
      mobile: nextProps.mobile,
      date: nextProps.date,
      email: nextProps.email,
      address: nextProps.address
    })
  }

  onButtonPress() {
    const { username, email, address, mobile, date } = this.state;
    this.props.editProfile({ username, email, address, mobile, date });
    this.props.userData();
  }

  renderSpinner() {
    if (this.props.loading) {
      return (
        <View style={{ flex: 1, marginTop: 10 }}>
          <Spinner />
        </View>
      );
    }
  }

  render() {
    const {
      containerStyle,
      buttonStyle,
      inputStyle,
      userNameStyle,
      emailPhoneStyle,
      dateStyle,
     } = styles;

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>

          <ScrollView
            contentContainerStyle={containerStyle}
          >

            <Text style={userNameStyle}>
              Username
            </Text>
            <InputMoreScreen
              placeholder=''
              style={inputStyle}
              value={this.state.username}
              onChangeText={(text) => this.setState({ username: text })}
            />

            <Text style={emailPhoneStyle}>
              E-mail
            </Text>
            <InputMoreScreen
              placeholder=''
              Type='email-address'
              style={inputStyle}
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />

            <Text style={emailPhoneStyle}>
              Phone
            </Text>
            <InputMoreScreen
              placeholder=''
              Type='phone-pad'
              style={inputStyle}
              value={this.state.mobile}
              onChangeText={(text) => this.setState({ mobile: text })}
            />

            <Text style={dateStyle}>
              Working Address
            </Text>
            <InputMoreScreen
              placeholder=''
              style={inputStyle}
              value={this.state.address}
              onChangeText={(text) => this.setState({ address: text })}
            />

            <Text style={dateStyle}>
              Anniversary Date
            </Text>
            <BirthdateInput
              width={0.75 * SCREEN_WIDTH}
              height={0.08 * SCREEN_HEIGHT}
              date={this.state.date}
              onDateChange={(date) => this.setState({ date: date })}
            />

            {this.renderSpinner()}

            <Button
              onPress={this.onButtonPress.bind(this)}
              title="Save"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * SCREEN_WIDTH}
            />

          </ScrollView>

        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 10
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 6
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  buttonStyle: {
    borderRadius: 0.05 * SCREEN_HEIGHT,
    backgroundColor: '#00C1FF',
    width: 0.8 * SCREEN_WIDTH,
    height: 0.095 * SCREEN_HEIGHT,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 40
  },
  userNameStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16,
    marginRight: 0.47 * SCREEN_WIDTH,
    fontWeight: '500'
  },
  emailPhoneStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16,
    marginRight: 0.55 * SCREEN_WIDTH,
    fontWeight: '500'
  },
  dateStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16,
    marginRight: 0.33 * SCREEN_WIDTH,
    fontWeight: '500'
  },
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    marginLeft: 10,
    fontSize: 0.055 * SCREEN_WIDTH,
    lineHeight: 23,
    fontWeight: "200",
    height: 50,
    width: 0.6 * SCREEN_WIDTH
  },
};

const mapStateToProps = ({ data }) => {
  const { username, email, mobile, address, date, loading } = data;
  return { username, email, mobile, address, date, loading };
};


export default connect(mapStateToProps,
  {
    userData,
    editAddress,
    editDate,
    editPhone,
    editEmail,
    editUsername,
    editProfile
  })
  (EditProfileScreen);
