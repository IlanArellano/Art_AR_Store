import React from 'react';
import {Text, TouchableOpacity, StyleSheet, StyleProp} from 'react-native';
import mainTheme from '@app/theme/theme';

type Buttontype = 'primary' | 'secondary' | 'outline' | 'tertiary';

type ButtonComponentProps = {
  buttonClass?: any;
  title?: String;
  buttonType: Buttontype;
  textStyles?: StyleProp<any>;
};

export type ButtonProps = ButtonComponentProps & TouchableOpacity['props'];

export function Button(props: ButtonProps) {
  const {style, buttonType, ...otherProps} = props;
  return (
    <TouchableOpacity style={[styles.button, style]} {...otherProps}>
      <Text style={[styles.text, otherProps.textStyles]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#14BBA9',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 7,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
});
