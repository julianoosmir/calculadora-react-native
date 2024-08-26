// src/components/ButtonNumbers.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const ButtonOperations: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    margin: 5,
    height: 70,
    width: '30%',
  },

  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10
  },

});

export default ButtonOperations;
