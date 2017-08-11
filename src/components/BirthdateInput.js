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
        style={styles.inputStyle}
        mode="date"
        placeholder={this.props.date ? this.props.date : 'Anniversary date'}
        format="YYYY-MM-DD"
        showIcon={false}
   //     minDate="1930-01-01"
        maxDate={today}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(0,0,0,0)'
          }
        }}
        onDateChange={(date) => { this.onDateChange(date); }}
      />
    );
  }

  render() {
    const { iconSource, style } = this.props;
    const { containerStyle, imageStyle } = styles;

    return (
      <View style={[containerStyle, style]}>
        <View style={{ flex: 2 }}>
          <Image
            style={imageStyle}
            source={iconSource}
          />
        </View>
        <View style={{ flex: 8 }}>
          {this.renderPicker()}
        </View>
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
