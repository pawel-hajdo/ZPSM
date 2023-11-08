import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import calculator, {initialState} from './calculator';
import CalcButton from './components/CalcButton';
export default class App extends Component {
   constructor(props) {
    super(props);
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      ...initialState,
      orientation: isPortrait() ? 'portrait' : 'landscape',
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape',
      });
    });
  }
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  HandleButtonPress = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    const buttonsPortrait = [
      'AC', '', '', '/',
      '7', '8', '9', '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', 'DEL', '=',
    ];

    const buttonsLandscape = [
      '(', ')', 'MC', 'M+', 'M-', 'MR', 'AC', '+/-', '%', '/',
      '2nd', 'x^2', 'x^3', 'x^y', 'e^x', '10^x', '7', '8', '9', '*',
      '1/x', '√(2)', '√(3)', '√(y)', 'ln', 'log(10)', '4', '5', '6', '-',
      'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
      'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', 'DEL', '=',
    ];

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const basicOperations = ['/', '*', '-', '+', '='];

    const isPortrait = this.state.orientation === 'portrait';
    const buttons = isPortrait ? buttonsPortrait : buttonsLandscape;

    return (
      <View style={styles.container}>
        <View
          style={[
            isPortrait
              ? styles.inputContainerPortrait
              : styles.inputContainerLandscape,
          ]}>
          <Text style={styles.input}>{this.state.currentValue}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {buttons.map((button, index) => {
            return (
              <CalcButton
                key={index}
                value={button}
                styleButton={[
                  isPortrait ? styles.portraitButton : styles.landscapeButton,
                  numbers.includes(button)
                    ? styles.numberButton
                    : styles.otherButtons,
                  basicOperations.includes(button)
                    ? styles.basicOperationButton
                    : null,
                ]}
                styleText={[styles.buttonText]}
                onPress={() => {
                  if (numbers.includes(button)) {
                    this.HandleButtonPress('number', button);
                  } else if (button === '=') {
                    this.HandleButtonPress(button);
                  } else if (basicOperations.includes(button)) {
                    this.HandleButtonPress('operator', button);
                  } else {
                    this.HandleButtonPress(button);
                  }
                }}>
              </CalcButton>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputContainerPortrait: {
    flex: 1,
    backgroundColor: '#dad7cd',
    paddingTop: 80,
    padding: 50,
    alignItems: 'flex-end',
  },
  inputContainerLandscape: {
    flex: 1,
    backgroundColor: '#dad7cd',
    paddingTop: 30,
    padding: 20,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  portraitButton: {
    width: '25%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  landscapeButton: {
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  numberButton: {
    backgroundColor: '#457b9d', // Kolor przycisków z liczbami
  },
  basicOperationButton: {
    backgroundColor: '#fca311', // Kolor przycisków z operacjami
  },
  otherButtons: {
    backgroundColor: '#8ecae6', // Kolor przycisków z operacjami
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});
