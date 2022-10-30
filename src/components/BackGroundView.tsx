import React from 'react';
import {View, StyleProp, StyleSheet, Dimensions} from 'react-native';
import ImageComponent, {type Images} from './ImageComponent';

interface BackgroundViewProps {
  source: Images;
  styles?: StyleProp<any>;
  maincontainerStyles?: StyleProp<any>;
  containerStyles?: StyleProp<any>;
}

export default function BackgroundView(
  props: React.PropsWithChildren<BackgroundViewProps>,
) {
  return (
    <View style={[styles.main, props.maincontainerStyles]}>
      <ImageComponent
        image={props.source}
        resizeMode="stretch"
        style={[styles.background, props.styles]}
      />
      <View style={[styles.container, props.containerStyles]}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    position: 'absolute',
    top: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    opacity: 0.5,
    zIndex: 0,
  },
});
