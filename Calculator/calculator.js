export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    return {currentValue: `${value}`};
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

const handleEqual = state => {
  const {currentValue, previousValue, operator} = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {operator: null, previousValue: null};

  switch (operator) {
    case '+':
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case '-':
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case '*':
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case '/':
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

// calculator function
const calculator = (type, value, state) => {
  switch (type) {
    case 'number':
      return handleNumber(value, state);
    case 'AC':
      return initialState;
    case '+/-':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case '%':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case 'x^2':
      return {
        currentValue: `${state.currentValue * state.currentValue}`,
      };
    case 'x^3':
      return {
        currentValue: `${
          state.currentValue * state.currentValue * state.currentValue
        }`,
      };
    case '√(2)':
      return {
        currentValue: `${Math.sqrt(state.currentValue)}`,
      };
    case '√(3)':
      return {
        currentValue: `${Math.pow(state.currentValue, 1 / 3)}`,
      };
    case '10^x':
      return {
        currentValue: `${Math.pow(10, state.currentValue)}`,
      };
    case '1/x':
      return {
        currentValue: `${1 / state.currentValue}`,
      };
    case 'ln':
      return {
        currentValue: `${Math.log(state.currentValue)}`,
      };
    case 'log(10)':
      return {
        currentValue: `${Math.log10(state.currentValue)}`,
      };
    case 'x!':
      return {};
    case 'sin':
      return {
        currentValue: `${Math.sin(state.currentValue)}`,
      };
    case 'cos':
      return {
        currentValue: `${Math.cos(state.currentValue)}`,
      };
    case 'tan':
      return {
        currentValue: `${Math.tan(state.currentValue)}`,
      };
    case 'sinh':
      return {
        currentValue: `${Math.sinh(state.currentValue)}`,
      };
    case 'cosh':
      return {
        currentValue: `${Math.cosh(state.currentValue)}`,
      };
    case 'tanh':
      return {
        currentValue: `${Math.tanh(state.currentValue)}`,
      };
    case 'e':
      return handleNumber(Math.E, state);
    case 'π':
      return handleNumber(Math.PI, state);
    case 'Rand':
      return handleNumber(Math.random(), state);
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0',
      };
    case '=':
      return handleEqual(state);
    default:
      return state;
  }
};

export default calculator;
