/**
 * this component is used whenever i want to take a text field as input from user
 */
import React from 'react';
import {
  View,
  DatePickerAndroid,
  DatePickerIOS,
  Image,
  Dimensions,
  Platform
} from 'react-native';
import DatePicker from 'react-native-datepicker';

const SCREEN_WIDTH = Dimensions.get('window').width;

class BirthdateInput extends React.Component {
  onDateChange(date) {
    console.log(date);
    //   this.props.dateChange(date);
  }

  renderPicker() {
    let today = new Date().toDateString();
    return (
      <DatePicker
        style={{ width: 0.91 * SCREEN_WIDTH, paddingTop: 20 }}
        mode="date"
        placeholder={'Aniversary Date'}
        format="MM-DD-YYYY"
        minDate="1930-01-01"
        maxDate="2000-12-30"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource={require('../../assets/icons/14.png')}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 20,
            top: 6,
            marginLeft: 4,
            width: 25,
            height: 25
          },
          dateInput: {
            marginLeft: 8,
            borderColor: 'white',
            backgroundColor: 'rgba(0,0,0,0)',
            borderRadius: 20,
            borderWidth: 0.3,
            height: 60,
            backgroundColor: '#5c1634',
            alignItems: "flex-start"
          },
          placeholderText: {
            fontSize: 18,
            color: 'white',
            fontWeight: "200",
            textAlign: "left",
            paddingLeft: 70,
            backgroundColor: '#5c1634',
          }
        }}
        onDateChange={(date) => { console.log('date changed') }}
      />
    );
  }

  render() {
    return (
      <View>
        {this.renderPicker()}
      </View>

    );
  }
};

/**
 * Styles used for ths component , includes the input style 
 */
const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: 'white',
    backgroundColor: '#5c1634',
    height: 60,
    width: 0.9 * SCREEN_WIDTH,
    margin: 10
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    height: 50
  },
  imageStyle: {
    width: 25,
    height: 25,
    margin: 15
  }
}

export { BirthdateInput };
