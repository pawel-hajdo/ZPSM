import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleButtonPress = value => {
    this.setState(prevState => ({
      input: prevState.input + value,
    }));
  };

  handleDelete = () => {
    this.setState(prevState => ({
      input: prevState.input.slice(0, -1)
    }));
  };

  calculateResult = () => {
    try {
      const result = eval(this.state.input);
      this.setState({
        input: result.toString()
      });
    } catch (error) {
      this.setState({
        input: 'Error'
      });
    }
  };

  clearInput = () => {
    this.setState({
      input: '',
    });
  };

  render() {
    const buttons = [
        'AC', '' , '', '/',
      '7', '8', '9', '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', 'DEL', '=',
    ];

    return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.input}>{this.state.input}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            {buttons.map((button, index) => {
              const isNumber = !isNaN(parseFloat(button)) || button === '.';
              return (
                  <TouchableOpacity
                      key={index}
                      style={[
                        styles.button,
                        isNumber ? styles.numberButton : styles.operationButton
                      ]}
                      onPress={() => {
                        if (button === '=') {
                          this.calculateResult();
                        } else if (button === 'AC') {
                          this.clearInput();
                        } else if (button === 'DEL') {
                          this.handleDelete();
                        } else {
                          this.handleButtonPress(button);
                        }
                      }}
                  >
                    <Text style={styles.buttonText}>{button}</Text>
                  </TouchableOpacity>
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
  inputContainer: {
    flex: 1,
    backgroundColor: '#dad7cd',
    paddingTop: 80,
    padding: 50,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  numberButton: {
    backgroundColor: '#588157', // Kolor przycisków z liczbami
  },
  operationButton: {
    backgroundColor: '#a3b18a', // Kolor przycisków z operacjami
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});
