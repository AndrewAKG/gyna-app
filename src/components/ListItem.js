import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';

class ListItem extends React.PureComponent {
  render() {
    const { containerStyle } = styles;
    return (
      <TouchableWithoutFeedback>
        <View>
          <Image
            source={iconSource}
          />
        </View>
        <View>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
  
const styles = {
  containerStyle: {
    backgroundColor: 'transparent',
    flex: 1
  },
  textContainer: {
    flex: 2,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 16,
    color: 'white'
  },
  iconContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    margin: 5,
    width: 32,
    height: 32
  }
};

export default ListItem;