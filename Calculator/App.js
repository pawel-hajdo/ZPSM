import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import CalcButton from './components/CalcButton';
import { evaluate, expression } from "mathjs";
export default class App extends Component {
   constructor(props) {
    super(props);
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape',
      expression: '0',
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
  HandleButtonPress = (value) => {

    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState((prevState) => {
          const lastChar = prevState.expression.slice(-1);
          const newExpression = lastChar.match(/[+\-/*]/) ? prevState.expression.slice(0, -1) + value : prevState.expression + value;

          return {
            expression: newExpression,
          };
        });
        break;

      case '+/-':
        this.setState((prevState) => {
          let newExpression = '';

          if (prevState.expression.startsWith('-')) {
            newExpression = prevState.expression.slice(1);
          } else {
            newExpression = `-(${prevState.expression})`;
          }

          return {
            expression: newExpression,
          };
        });
        break;
      case '1/x':
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? '1/' : prevState.expression.concat('1/')
        }));
        break;
      case '%':
        this.setState(prevState => ({
          expression: prevState.expression.concat('/100')
        }));
          break;
      case 'x^2':
        this.setState(prevState => ({
          expression: prevState.expression.concat('^2')
        }));
        break;
      case 'x^3':
        this.setState(prevState => ({
          expression: prevState.expression.concat('^3')
        }));
        break;
      case 'x^y':
        this.setState(prevState => ({
          expression: prevState.expression.concat('^')
        }));
        break;
      case '10^x':
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? '10^' : prevState.expression.concat('10^')
        }));
        break;
      case 'x!':
        this.setState(prevState => ({
          expression: prevState.expression.concat('!')
        }));
        break;
      case '√':
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? 'sqrt(' : prevState.expression.concat('sqrt(')
        }));
        break;
      case '∛':
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? 'nthRoot(3,' : prevState.expression.concat('nthRoot(3,')
        }));
        break;
      case '=':
        this.CalculateExpression();
        break;
      case 'AC':
        this.ClearExpression();
        break;
      case 'DEL':
        this.DeleteLast();
        break;
      case 'sin':
      case 'cos':
      case 'tan':
      case 'sinh':
      case 'tanh':
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? value+'(' : prevState.expression.concat(value+'(')
        }));
        break;
      case 'e':
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? Math.E.toString() : prevState.expression.concat(Math.E)
        }));
        break;
      case 'π':
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? Math.PI.toString() : prevState.expression.concat(Math.PI)
        }));
        break;
      case 'Rand':
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? Math.random().toString() : prevState.expression.concat(Math.random())
        }));
        break;
      default:
        this.setState(prevState => ({
          expression: prevState.expression === '0' ? value : `${prevState.expression}${value}`
        }));
        break;
    }

  };

   ClearExpression() {
    this.setState(prevState => ({
      expression: '0'
    }));
   }

   DeleteLast() {
     this.setState(prevState => ({
       expression: prevState.expression.slice(0, -1)
      }));
    }
   CalculateExpression(){
     try {
       const result = evaluate(this.state.expression).toPrecision(8);
       this.setState({
         expression: result.toString(),
       });
     } catch (error) {
       console.error('Error evaluating expression:', error);
     }
   }

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
      '1/x', '√', '∛', '√(y)', 'ln', 'log(10)', '4', '5', '6', '-',
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
          <Text style={styles.input}>{this.state.expression}</Text>
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
                  this.HandleButtonPress(button);
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
