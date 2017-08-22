import React from 'react';
import { View, WebView, Text, Image, Dimensions, ScrollView } from 'react-native';
import { BackgroundImage, Spinner } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class VideosScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'videoScreen',
    headerStyle: {
      backgroundColor: '#5C1634'
    },
    headerTintColor: 'white',
    headerTitle: navigation.state.params.title
  });

  constructor(props) {
    super(props);
  }

  renderSpinner() {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }

  render() {
    const { videoLink, title } = this.props.navigation.state.params;
    console.log('LINK', videoLink);

    return (
      <BackgroundImage>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
            <Text style={styles.textStyle}>
              {title}
            </Text>
          </View>
          <View style={{ flex: 6 }}>
            <WebView
              renderLoading={() => this.renderSpinner()}
              style={styles.container}
              source={{ uri: videoLink }}
            />
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  container: {
    width: null, 
    height: 300, 
    position: 'relative'
  },
  textStyle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 18
  }
};

export default VideosScreen;