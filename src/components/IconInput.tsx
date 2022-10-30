import React, {forwardRef} from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {IconsKeys} from '@app/icons/icons';
import IconButton from './IconButton';

type Position = 'left' | 'right';

interface Props extends TextInputProps {
  icon?: IconsKeys;
  position?: Position;
  iconStyle?: Omit<StyleProp<ViewStyle>, 'backgroundColor'>;
  onPress?: (event: GestureResponderEvent) => void;
}

const IconInput = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <View style={styles.mainn}>
      <TextInput
        placeholderTextColor="#000000"
        {...props}
        style={[styles.input, props.style]}
        ref={ref}
      />

      {props.icon ? (
        <IconButton
          icon={props.icon}
          onPress={props.onPress}
          style={[styles.icon, props.style, props.iconStyle]}
        />
      ) : (
        <></>
      )}
    </View>
  );
});

export default IconInput;

const styles = StyleSheet.create({
  mainn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    flex: 7,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  icon: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
