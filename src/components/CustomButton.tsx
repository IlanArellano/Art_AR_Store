import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f95dc',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 7,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
