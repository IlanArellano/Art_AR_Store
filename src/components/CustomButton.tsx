import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';
import ImageComponent, {ImageCollection} from './ImageComponent';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  image?: ImageCollection;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{props.title}</Text>
      {props.image && (
        <ImageComponent style={styles.image} image={props.image} />
      )}
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
  image: {
    width: 20,
    height: 20,
  },
});
