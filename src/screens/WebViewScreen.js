import React from 'react';
import { View, WebView, Text, Image, Dimensions, ScrollView } from 'react-native';
import { BackgroundImage, Spinner } from '../components';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WebViewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'webviewScreen',
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
    const { contentSource, title, image, sub_title } = this.props.navigation.state.params;
    console.log('CONTENT', contentSource);

    return (
      <BackgroundImage>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
              <Image
                source={{ uri: image }}
                style={styles.imageStyle}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', margin: 10 }}>
              <Text style={styles.textStyle}>
                {title}
              </Text>
              <Text style={styles.textStyle}>
                {sub_title}
              </Text>
            </View>
            <View style={{ flex: 6 }}>
              <WebView
                renderLoading={() => this.renderSpinner()}
                style={styles.container}
                source={{ html: contentSource }}
              />
            </View>
          </View>
      </BackgroundImage>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 12
  },
  textStyle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 18
  },
  imageStyle: {
    width: 0.3 * SCREEN_WIDTH,
    height: 0.3 * SCREEN_WIDTH
  }
};

export default WebViewScreen;