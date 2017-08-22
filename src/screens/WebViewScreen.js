import React from 'react';
import { View, WebView, Text, TouchableHighlight, Dimensions } from 'react-native';
import { BackgroundImage, Spinner } from '../components';

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
    const { contentSource } = this.props.navigation.state.params;
    console.log('CONTENT', contentSource);

    return (
      <WebView
        renderLoading={() => this.renderSpinner()}
        style={styles.container}
        source={{ html: contentSource }}
      />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: 'transparent'
  }
};

export default WebViewScreen;