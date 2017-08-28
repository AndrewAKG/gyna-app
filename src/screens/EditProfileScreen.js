import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions, Modal } from 'react-native';
import { BackgroundImage, InputMoreScreen, BirthdateInput, Spinner } from '../components';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { userData, editUsername, editAddress, editDate, editEmail, editPhone, editProfile, clearProps } from '../actions';

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
      modal: false
    }
  }

  componentWillMount() {
    this.props.userData();
  }

  componentWillReceiveProps(nextProps) {
    this.onEditComplete(nextProps);
  }

  onEditComplete(props) {
    if (props.success === 'true') {
      this.props.clearProps();
      this.props.navigation.navigate('more');
    }
    else if (props.success === 'false') {
      this.setState({ modal: true });
      setTimeout(() => this.props.clearProps(), 4000)
      setTimeout(() => this.props.userData(), 4000)
    }
    else if (props.loading) {
      this.setState({ modal: true });
    }
  }

  onUserNameChanged(text) {
    this.props.editUsername(text)
  }

  onAddressChanged(text) {
    this.props.editAddress(text)
  }

  onEmailChanged(text) {
    this.props.editEmail(text)
  }

  onPhoneChanged(text) {
    this.props.editPhone(text)
  }

  onButtonPress() {
    const { username, email, address, mobile } = this.props;
    const { date } = this.state;
    this.props.editProfile({ username, email, address, mobile, date });
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

  renderContent() {
    if (this.props.loading) {
      return (
        <View style={styles.feedbackStyle}>
          <Spinner />
        </View>
      );
    }
    else {
      return (
        <View style={styles.feedbackStyle}>
          <Text style={{ fontSize: 18, backgroundColor: 'transparent', color: 'white' }}>
            {console.log(this.props.error)}
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderModal() {
    if (this.props.loading || this.props.success === 'false') {
      return (
        <Modal
          animationType={'fade'}
          visible={this.state.modal}
          transparent={true}
          presentationStyle={'overFullScreen'}
          onShow={() => setTimeout(() => this.setState({ modal: false }), 4000)}
        >
          {this.renderContent()}
        </Modal>
      );
    }
  }

  onUserNameChanged(text) {
    this.props.editUsername(text)
  }

  onAddressChanged(text) {
    this.props.editAddress(text)
  }

  onEmailChanged(text) {
    this.props.editEmail(text)
  }

  onPhoneChanged(text) {
    this.props.editPhone(text)
  }

  onButtonPress() {
    const { username, email, address, mobile } = this.props;
    const { date } = this.state;
    this.props.editProfile({ username, email, address, mobile, date });

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
              value={this.props.username}
              onChangeText={this.onUserNameChanged.bind(this)}
            />

            <Text style={emailPhoneStyle}>
              E-mail
            </Text>
            <InputMoreScreen
              placeholder=''
              Type='email-address'
              style={inputStyle}
              value={this.props.email}
              onChangeText={this.onEmailChanged.bind(this)}
            />

            <Text style={emailPhoneStyle}>
              Phone
            </Text>
            <InputMoreScreen
              placeholder=''
              Type='phone-pad'
              style={inputStyle}
              value={this.props.mobile}
              onChangeText={this.onPhoneChanged.bind(this)}
            />

            <Text style={dateStyle}>
              Working Address
            </Text>
            <InputMoreScreen
              placeholder=''
              style={inputStyle}
              value={this.props.address}
              onChangeText={this.onAddressChanged.bind(this)}
            />

            <Text style={dateStyle}>
              Anniversary Date
            </Text>
            <BirthdateInput
              style={{ width: 0.75 * SCREEN_WIDTH }}
              inputStyle={{ height: 0.08 * SCREEN_HEIGHT, paddingLeft: 5 }}
              date={this.state.date}
              onDateChange={(date) => this.setState({ date: date })}
              show={false}
            />

            <Button
              onPress={this.onButtonPress.bind(this)}
              title="Save"
              buttonStyle={buttonStyle}
              color='white'
              fontWeight='bold'
              fontSize={0.047 * SCREEN_WIDTH}
            />
            {this.renderModal()}
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
    fontSize:  0.045 * SCREEN_WIDTH,
    marginRight: 0.47 * SCREEN_WIDTH,
    fontWeight: '500'
  },
  emailPhoneStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 0.045 * SCREEN_WIDTH,
    marginRight: 0.55 * SCREEN_WIDTH,
    fontWeight: '500'
  },
  dateStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize:  0.045 * SCREEN_WIDTH,
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
  feedbackStyle: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
};

const mapStateToProps = ({ data }) => {
  const { username, email, mobile, address, date, loading, success, error } = data;
  return { username, email, mobile, address, date, loading, success, error };
};


export default connect(mapStateToProps,
  {
    userData,
    editAddress,
    editDate,
    editPhone,
    editEmail,
    editUsername,
    editProfile,
    clearProps
  })
  (EditProfileScreen);
