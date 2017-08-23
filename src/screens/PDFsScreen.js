import React from 'react';
import { View, WebView, Text, TouchableHighlight, Dimensions } from 'react-native';
import { BackgroundImage, Spinner } from '../components';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class PDFsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'pdfScreen',
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
        <Spinner />
    );
  }

  render() {
    const { pdfLink } = this.props.navigation.state.params;
    console.log('PDF LINK', pdfLink);

    return (
      <BackgroundImage>
        <WebView
          style={styles.container}
          source={{ uri: pdfLink }}
        />
      </BackgroundImage>);
  }
}

const styles = {
  container: {
    position: 'relative',
    backgroundColor: 'transparent'
  }
};

export default PDFsScreen;