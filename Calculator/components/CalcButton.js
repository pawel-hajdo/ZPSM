import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const CalcButton = ({onPress, value, styleButton, styleText}) => {
  return (
    <TouchableOpacity style={[styleButton]} onPress={() => onPress()}>
      <Text style={styleText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default CalcButton;
