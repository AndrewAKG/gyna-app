import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { Button } from 'react-native-elements';
import { Input } from '../components/Input';
import DatePicker from 'react-native-datepicker';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class BirthDate extends Component {
render(){
    return(
        <DatePicker
        style={{ width: 0.91 * SCREEN_WIDTH, paddingTop: 20 }}
        mode="date"
        placeholder={'Aniversary Date'}
        format="YYYY-MM-DD"
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
            alignItems:"flex-start"
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
}
export default BirthDate;