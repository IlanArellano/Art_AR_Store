import React from 'react';
import {
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  StyleSheet,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {IconsKeys, IconsComponent} from '@app/icons/icons';

interface IconButtonProps extends TouchableHighlightProps {
  icon: IconsKeys;
  iconProps?: SvgProps;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <TouchableHighlight {...props}>
      <View style={styles.iconView}>
        <IconsComponent icon={props.icon} {...props.iconProps} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    justifyContent: 'center',
  },
});
