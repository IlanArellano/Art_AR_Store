import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  StyleSheet,
  StyleProp,
  Text,
} from 'react-native';
import ImageComponent, {type ImageCollection} from './ImageComponent';

interface IconButtonProps extends TouchableOpacityProps {
  image: ImageCollection;
  text?: string;
  imageStyle?: StyleProp<any>;
}

export default function ImageButton(props: IconButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.iconView}>
        <ImageComponent image={props.image} style={props.imageStyle} />
        {props.text && <Text style={styles.text}>{props.text}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});
