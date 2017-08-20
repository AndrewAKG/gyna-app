import React from 'react';
import { View, WebView, Text, TouchableHighlight, Dimensions } from 'react-native';
import { BackgroundImage, Spinner } from '../components';
//import Pdf from 'react-native-pdf';

const pdfDownloadURL = 'http://image.tianjimedia.com/imagelist/2009/190/caq4z56jadof.pdf';

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
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }

  render() {
    const { pdfLink } = this.props.navigation.state.params;
    let source = { uri: 'http://image.tianjimedia.com/imagelist/2009/190/caq4z56jadof.pdf', cache: true };
    console.log('PDF LINK', pdfLink);

    return (
      <BackgroundImage>
        <WebView
          renderLoading={() => this.renderSpinner()}
          style={styles.container}
          source={{ uri: pdfLink }}
        />
      </BackgroundImage>);
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

export default PDFsScreen;