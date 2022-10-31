import React from 'react';
import {View} from 'react-native';
import {baseStyles as styles} from './styles';
import ImageComponent from '../ImageComponent';
import ModalBase from './base';

export default function LoadingModal() {
  return (
    <ModalBase>
      <View style={styles.modalViewSecondary}>
        <ImageComponent style={styles.loaderImage} image="loader" />
      </View>
    </ModalBase>
  );
}
