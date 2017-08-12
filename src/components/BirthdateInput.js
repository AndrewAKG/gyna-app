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
const SCREEN_HEIGHT = Dimensions.get('window').height;

class BirthdateInput extends React.Component {
  onDateChange(date) {
    console.log(date);
    //   this.props.dateChange(date);
  }

  renderPicker() {
    let today = new Date().toDateString();
    return (
      <DatePicker
        style={{ width: 0.81 * SCREEN_WIDTH, paddingTop: 20 }}
        mode="date"
        placeholder={'Aniversary Date'}
        format="MM-DD-YYYY"
        minDate="1930-01-01"
        maxDate={today}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconSource={require('../../assets/icons/14.png')}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 10,
            top: 6,
            width: 25,
            height: 25
          },
          dateInput: {
            borderColor: 'white',
            backgroundColor: 'rgba(0,0,0,0)',
            borderRadius: 20,
            borderWidth: 0.3,
            height: 0.1 * SCREEN_HEIGHT,
            backgroundColor: '#5c1634',
            alignItems: 'flex-start'
          },
          placeholderText: {
            fontSize: 18,
            color: 'white',
            fontWeight: '200',
            textAlign: 'left',
            paddingLeft: 53,
            backgroundColor: '#5c1634',
          }
        }}
        onDateChange={(date) => { console.log('date changed') }}
      />
    );
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        {this.renderPicker()}
      </View>

    );
  }
};

export { BirthdateInput };
