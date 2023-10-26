import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true, // Początkowo fragment jest ukryty
    };
  }

  _onPressButton = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }));
  }

  render(){
    const buttonText = this.state.isHidden ? 'Pokaż' : 'Ukryj';

    return (
      <View style = {styles.container}>
        <View>
          <Text style = {styles.text}>Zadanie 2</Text>
          <TouchableOpacity 
              onPress={this._onPressButton}
              style = {{alignItems:'center', backgroundColor: '#DDDDDD', padding: 10}}>
            <Text>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        {!this.state.isHidden && (
          <View style={styles.hiddenContent}>
            <Text>Nazywam się</Text>
            <Text style = {{fontWeight: 'bold'}}>Paweł Hajdo</Text>
          </View>
        )}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    margin: 8,
    fontSize: 30,
  },
  hiddenContent: {
    marginTop: 20,
  }
});

